import { Briefcase, GraduationCap, Languages } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="03" title="Experiencia y formación" />

        <div className="mt-10 space-y-10">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              <Briefcase className="h-4 w-4" />
              Experiencia laboral
            </h3>
            <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
              {experience.map((item) => (
                <li key={item.id} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-foreground">{item.role}</h4>
                    <span className="text-sm text-muted">
                      — {item.place} · {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
                <GraduationCap className="h-4 w-4" />
                Educación
              </h3>
              <ul className="mt-5 space-y-4">
                {site.education.map((edu) => (
                  <li key={edu.title}>
                    <p className="font-semibold text-foreground">{edu.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {edu.institution} · {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
                <Languages className="h-4 w-4" />
                Idiomas
              </h3>
              <ul className="mt-5 space-y-4">
                {site.languages.map((lang) => (
                  <li key={lang.name}>
                    <p className="font-semibold text-foreground">{lang.name}</p>
                    <p className="mt-1 text-sm text-muted">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}