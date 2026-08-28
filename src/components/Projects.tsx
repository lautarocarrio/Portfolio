import { CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="Proyectos" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.accent}`}
              >
                <span className="font-mono text-lg font-semibold tracking-wide">
                  {project.subtitle}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver código en GitHub de ${project.title}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Ver en GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}