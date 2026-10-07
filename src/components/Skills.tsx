import React from 'react';

const SKILL_GROUPS = [
  { title: 'Frontend',        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend y datos', skills: ['Node.js', 'Express', 'APIs REST', 'PostgreSQL', 'Supabase', 'MongoDB'] },
  { title: 'Herramientas',    skills: ['Git', 'GitHub', 'Vercel', 'Cloudflare Workers', 'Claude Code'] },
];

const Skills: React.FC = () => (
  <div className="space-y-5">
    <div className="grid gap-5 md:grid-cols-3">
      {SKILL_GROUPS.map(({ title, skills }) => (
        <div key={title} className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">{title}</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <li key={skill} className="rounded-full border border-sky-500/50 bg-sky-950/40 px-3 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="text-sm text-gray-400">
      <span className="font-semibold text-gray-300">Aprendiendo:</span> testing, CI/CD con GitHub Actions, Docker
    </p>
  </div>
);

export default Skills;
