import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading number="05" title="Contacto" />
        <h3 className="mt-8 text-2xl font-bold sm:text-3xl">¿Tenés un proyecto en mente?</h3>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Estoy disponible para colaborar en proyectos web. Escribime por cualquier medio y
          te respondo a la brevedad.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {site.contact.email}
          </a>
          <a
            href={`tel:${site.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {site.contact.phone}
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
    </section>
  );
}