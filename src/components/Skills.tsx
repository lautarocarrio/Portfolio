import SectionHeading from "./SectionHeading";
import { site, skills } from "../data/site";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="04" title="Tecnologías" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          El stack con el que trabajo día a día para llevar proyectos de la idea al
          producto final.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border bg-surface px-4 py-2 font-mono text-sm transition-colors hover:border-accent/60 hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
            Competencias técnicas
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {site.competencies.map((competency) => (
              <span
                key={competency}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}