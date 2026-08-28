import { ArrowRight, Code2, Database, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

const icons = [Rocket, Code2, Database];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="01" title="Sobre mí" />

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Soy {site.role} y estudiante del último año de la Tecnicatura Universitaria en
              Programación en la UTN. Me apasiona la programación y disfruto llevar
              productos web de punta a punta: interfaz, estado, autenticación y base de datos.
            </p>
            <p>
              Trabajé como freelance en sistemas reales: una aplicación full-stack de gestión
              de ventas y un catálogo online con pedidos por WhatsApp. Busco asumir nuevos
              desafíos, aportar mis conocimientos y seguir creciendo como desarrollador.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              En pocas palabras
            </h3>
            <ul className="mt-5 space-y-5">
              {site.summary.map((item, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-light">
                      <Icon className="h-4 w-4 text-accent" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              Ver mis proyectos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}