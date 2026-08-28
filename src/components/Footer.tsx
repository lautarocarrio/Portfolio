import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          &lt;lautaro.dev /&gt; — {site.name}
        </p>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Diseñado y desarrollado con React.
        </p>
      </div>
    </footer>
  );
}