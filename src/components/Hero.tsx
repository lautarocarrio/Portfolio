import { ArrowDown, Github, Linkedin, MapPin } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <img
          src="/foto.png"
          alt={`Foto de ${site.name}`}
          className="mx-auto h-28 w-28 rounded-full border-2 border-accent/60 object-cover shadow-lg sm:h-32 sm:w-32"
        />
        <p className="mt-6 font-mono text-sm text-accent">Hola, mi nombre es</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          {site.name}
        </h1>
        <h2 className="mt-3 text-xl font-semibold text-muted sm:text-2xl">{site.role}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.bio}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
          <MapPin className="h-4 w-4 text-accent" />
          {site.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative mt-16 flex justify-center">
        <a href="#about" aria-label="Ir a Sobre mí">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted" />
        </a>
      </div>
    </section>
  );
}