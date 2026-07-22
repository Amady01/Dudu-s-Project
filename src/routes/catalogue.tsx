import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Pièces auto disponibles à Dakar | AutoForge" },
      {
        name: "description",
        content:
          "Parcourez les pièces détachées auto disponibles à Dakar : prix en FCFA, zone du fournisseur et statut en temps réel.",
      },
      { property: "og:title", content: "Catalogue AutoForge — Pièces auto à Dakar" },
      {
        property: "og:description",
        content: "Toyota, Renault, Hyundai et plus : prix et dispo en direct.",
      },
    ],
  }),
  component: CataloguePage,
});

type Part = {
  name: string;
  zone: string;
  price: number;
  available: boolean;
  brand: "Toyota" | "Renault" | "Hyundai" | "Peugeot" | "Kia";
};

const PARTS: Part[] = [
  { name: "Plaquettes de frein Toyota Corolla", zone: "Marché Petersen, Dakar", price: 15000, available: true, brand: "Toyota" },
  { name: "Alternateur Renault Logan", zone: "Thiaroye-sur-Mer", price: 48000, available: false, brand: "Renault" },
  { name: "Pare-choc avant Hyundai i10", zone: "Colobane, Dakar", price: 60000, available: false, brand: "Hyundai" },
  { name: "Filtre à huile Peugeot 206", zone: "Marché HLM, Dakar", price: 5000, available: true, brand: "Peugeot" },
  { name: "Batterie Kia Picanto 12V", zone: "Diamniadio", price: 55000, available: true, brand: "Kia" },
  { name: "Rétroviseur droit Toyota Hilux", zone: "Marché Petersen, Dakar", price: 20000, available: true, brand: "Toyota" },
];

const FILTERS = ["Tous", "Toyota", "Renault", "Hyundai"] as const;
type Filter = (typeof FILTERS)[number];

function formatFCFA(n: number) {
  return `${n.toLocaleString("fr-FR").replace(/,/g, " ")} FCFA`;
}

function CataloguePage() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const filtered = filter === "Tous" ? PARTS : PARTS.filter((p) => p.brand === filter);

  async function askExpert(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch("https://api.dify.ai/v1/workflows/run", {
        method: "POST",
        headers: {
          Authorization: "Bearer app-JMsq9t0m85LKUhbSefrDMnsd",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: { query: query.trim() },
          response_mode: "blocking",
          user: "AutoForge-" + Date.now(),
        }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error("network");
      const data = await res.json();
      const outputs = data?.data?.outputs;
      const text =
        typeof outputs === "string"
          ? outputs
          : outputs?.text ?? outputs?.answer ?? outputs?.result ?? JSON.stringify(outputs, null, 2);
      setResult(text || "Aucune réponse reçue.");
    } catch (err: unknown) {
      const name = (err as { name?: string } | null)?.name;
      if (name === "AbortError") {
        setError("La réponse prend trop de temps — réessayez");
      } else {
        setError("Service temporairement indisponible");
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Catalogue des pièces
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Prix, disponibilité et localisation mis à jour en temps réel par nos fournisseurs
          partenaires à Dakar.
        </p>
      </header>

      {/* AI Expert */}
      <section className="mb-10 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-foreground sm:text-xl">
          Consultez l'expert IA AutoForge
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Posez votre question sur un prix, une disponibilité ou un fournisseur à Dakar.
        </p>
        <form onSubmit={askExpert} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Prix d'un alternateur Tucson 2015 à Colobane ?"
            className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            style={{ backgroundColor: "#1E3A8A" }}
            className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Analyse en cours…" : "Consulter l'expert IA 🚗"}
          </button>
        </form>

        {(loading || result || error) && (
          <div
            className="mt-4 rounded-lg p-4 text-sm"
            style={{ backgroundColor: "#F3F4F6" }}
            aria-live="polite"
          >
            {loading && (
              <div className="flex items-center gap-3 text-foreground">
                <span
                  className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-brand border-t-transparent"
                  aria-hidden
                />
                Analyse des stocks et prix à Dakar en cours...
              </div>
            )}
            {!loading && error && (
              <p className="font-medium" style={{ color: "#DC2626" }}>
                {error}
              </p>
            )}
            {!loading && !error && result && (
              <pre className="whitespace-pre-wrap break-words font-sans text-foreground">
                {result}
              </pre>
            )}
          </div>
        )}
      </section>



      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors " +
                (isActive
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-background text-foreground hover:border-brand hover:text-brand")
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-semibold leading-snug text-foreground">
                {p.name}
              </h2>
              <span
                className={
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold " +
                  (p.available
                    ? "bg-success/10 text-success"
                    : "bg-danger/10 text-danger")
                }
              >
                <span
                  className={
                    "h-2 w-2 rounded-full " +
                    (p.available ? "bg-success" : "bg-danger")
                  }
                  aria-hidden
                />
                {p.available ? "Disponible" : "Indisponible"}
              </span>
            </div>

            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <span aria-hidden>📍</span>
              {p.zone}
            </p>

            <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
              <span className="text-lg font-extrabold text-brand">{formatFCFA(p.price)}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {p.brand}
              </span>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Aucune pièce pour ce filtre pour le moment.
        </p>
      )}
    </section>
  );
}
