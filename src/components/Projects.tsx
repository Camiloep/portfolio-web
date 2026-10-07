import Image from "next/image";
import { workProjects, personalProjects, type Project } from "@/data/projects";

function Card({ p }: { p: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
      {p.image && (
        <Image
          src={p.image}
          alt={`Captura de ${p.name}`}
          width={640}
          height={360}
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="text-lg font-semibold">{p.name}</h4>
        <span className="shrink-0 text-sm text-white/60">{p.period}</span>
      </div>
      <p className="text-sm text-white/70">{p.role}</p>
      <p className="text-sm">{p.description}</p>
      <ul className="flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-4 pt-2 text-sm">
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="underline">
            Ver sitio
          </a>
        )}
        {p.code && (
          <a href={p.code} target="_blank" rel="noopener noreferrer" className="underline">
            Código
          </a>
        )}
        {p.note && <span className="text-white/60">{p.note}</span>}
      </div>
    </article>
  );
}

function Group({ title, items }: { title: string; items: Project[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">{title}</h3>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((p) => (
          <Card key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Proyectos</h2>
      <Group title="En Nurent" items={workProjects} />
      <Group title="Personales" items={personalProjects} />
    </section>
  );
}
