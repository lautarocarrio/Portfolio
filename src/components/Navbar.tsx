import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Tecnologías", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-wide text-accent">
          &lt;lautaro.dev /&gt;
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </nav>

        <button
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-4 py-2 text-center text-sm font-medium text-foreground"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}