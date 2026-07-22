import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoForge — Trouvez la bonne pièce auto à Dakar" },
      {
        name: "description",
        content:
          "Comparez en temps réel prix, disponibilité et localisation des pièces détachées auto à Dakar. Évitez les déplacements inutiles.",
      },
      { property: "og:title", content: "AutoForge — Pièces auto à Dakar en temps réel" },
      {
        property: "og:description",
        content: "Disponibilité, prix et localisation centralisés pour les pièces auto à Dakar.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Dakar · Temps réel
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Trouvez la bonne pièce auto à Dakar,{" "}
              <span className="text-brand">sans détour</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              AutoForge centralise en temps réel la disponibilité, les prix et la localisation
              des pièces détachées automobiles. Fini les tours de marché inutiles et les prix
              gonflés par les intermédiaires.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/catalogue"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                Trouver une pièce
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-accent-orange bg-transparent px-6 py-3 text-sm font-semibold text-accent-orange transition-colors hover:bg-accent-orange hover:text-white"
              >
                Devenir revendeur partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          {[
            {
              value: "120+",
              label: "Fournisseurs référencés à Dakar et sa banlieue",
            },
            {
              value: "3 500+",
              label: "Références de pièces suivies en temps réel",
            },
            {
              value: "40 %",
              label: "D'économies moyennes vs. les intermédiaires du marché",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-extrabold text-brand sm:text-5xl">{s.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Comment ça marche</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Cherchez", d: "Tapez le nom de votre pièce ou choisissez votre marque." },
              { n: "2", t: "Comparez", d: "Voyez en direct prix, disponibilité et zone du fournisseur." },
              { n: "3", t: "Retirez", d: "Contactez le fournisseur le plus proche et évitez les détours." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
