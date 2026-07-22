import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AutoForge Dakar" },
      {
        name: "description",
        content:
          "Contactez AutoForge : Route de Diamniadio, Zone Industrielle, Dakar. Devenez revendeur partenaire ou posez-nous vos questions.",
      },
      { property: "og:title", content: "Contact AutoForge" },
      {
        property: "og:description",
        content: "Écrivez-nous depuis Dakar — réponses sous 24h ouvrées.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputCls =
    "mt-1 block w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Contactez AutoForge
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Une question, un besoin spécifique, ou l'envie de devenir revendeur partenaire ?
          Écrivez-nous — notre équipe basée à Dakar vous répond sous 24h ouvrées.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          {sent && (
            <div className="mb-5 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm font-medium text-success">
              Message envoyé, merci ! Nous revenons vers vous très vite.
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-foreground">Nom complet</span>
              <input
                required
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Ex. Awa Diop"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">E-mail</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="vous@exemple.com"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Téléphone</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+221 77 000 00 00"
                className={inputCls}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-foreground">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Décrivez la pièce recherchée, le modèle du véhicule…"
                className={inputCls}
              />
            </label>
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#1565C0" }}
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
          >
            Envoyer le message
          </button>
        </form>

        {/* Info */}
        <aside className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-border bg-brand-soft p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Notre adresse
            </h2>
            <p className="mt-3 text-base font-semibold text-foreground">AutoForge SARL</p>
            <p className="mt-1 text-sm text-foreground/80">
              Route de Diamniadio,<br />
              Zone Industrielle,<br />
              Dakar, Sénégal
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Nous joindre
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li>📞 +221 33 800 00 00</li>
              <li>✉️ contact@autoforge.sn</li>
              <li>🕒 Lun. – Sam. · 8h – 19h</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
