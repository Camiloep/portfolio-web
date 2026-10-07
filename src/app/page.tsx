"use client"

import { motion, MotionConfig } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

import GitHubLogo from "@/components/Icons/GitHubLogo";
import GlowArticle from "@/components/card";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Logo from "@/components/Icons/Logo";

// @ts-ignore
import '@/styles/globals.css'

const PARTICLES = [
  { left: '3%',  size: '10px', color: '#4fc3dc', opacity: 0.55, duration: '14s', delay: '0s',   drift:  '30px'  },
  { left: '10%', size: '24px', color: '#ffffff', opacity: 0.18, duration: '20s', delay: '3s',   drift: '-20px'  },
  { left: '18%', size: '8px',  color: '#6366f1', opacity: 0.6,  duration: '12s', delay: '6s',   drift:  '15px'  },
  { left: '26%', size: '18px', color: '#4fc3dc', opacity: 0.4,  duration: '17s', delay: '1s',   drift: '-25px'  },
  { left: '35%', size: '12px', color: '#a855f7', opacity: 0.5,  duration: '15s', delay: '8s',   drift:  '20px'  },
  { left: '44%', size: '32px', color: '#ffffff', opacity: 0.12, duration: '23s', delay: '4s',   drift: '-15px'  },
  { left: '52%', size: '8px',  color: '#4fc3dc', opacity: 0.6,  duration: '11s', delay: '10s',  drift:  '25px'  },
  { left: '60%', size: '20px', color: '#6366f1', opacity: 0.35, duration: '19s', delay: '5s',   drift: '-30px'  },
  { left: '68%', size: '14px', color: '#ffffff', opacity: 0.28, duration: '16s', delay: '7s',   drift:  '20px'  },
  { left: '75%', size: '22px', color: '#a855f7', opacity: 0.38, duration: '21s', delay: '2s',   drift: '-10px'  },
  { left: '82%', size: '10px', color: '#4fc3dc', opacity: 0.55, duration: '13s', delay: '9s',   drift:  '15px'  },
  { left: '89%', size: '16px', color: '#ffffff', opacity: 0.22, duration: '18s', delay: '1s',   drift: '-22px'  },
  { left: '94%', size: '12px', color: '#6366f1', opacity: 0.5,  duration: '15s', delay: '6s',   drift:  '10px'  },
  { left: '98%', size: '8px',  color: '#a855f7', opacity: 0.6,  duration: '12s', delay: '11s',  drift: '-15px'  },
] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const EMAIL = 'caespa0818@hotmail.es';
const CV_URL = '/cv-camilo-estrada-patino.pdf';

const EXPERIENCE = [
  {
    company: 'Nurent S.A.S.',
    role: 'Desarrollador Full Stack',
    period: 'may 2024 – actualidad',
    bullets: [
      'Desarrollo del sitio web público de inmuebles con Next.js, React, TypeScript y Tailwind CSS.',
      'Construcción y mantenimiento de la API en Node.js y Express, con integraciones de pagos, WhatsApp y calendarios.',
      'Desarrollo de módulos del CRM: chat de WhatsApp en tiempo real, agenda, marketing y facturación.',
      'Modelado de la base de datos en PostgreSQL (Supabase) y despliegues a producción.',
    ],
  },
  {
    company: 'Ariafina S.A.S.',
    role: 'Automatizador de procesos (RPA)',
    period: 'oct 2023 – mar 2024',
    bullets: [
      'Automatización de procesos empresariales con ElectroNeek y scripts en Python.',
    ],
  },
];

// Redes personales: van al pie, en pequeño
const FOOTER_LINKS = [
  { href: 'https://x.com/milosx0818',                  name: 'X'         },
  { href: 'https://www.instagram.com/camilo_e.p/',      name: 'Instagram' },
  { href: 'https://www.facebook.com/camilo.estrada.e4', name: 'Facebook'  },
  { href: 'https://www.tiktok.com/@camilo_ep_',         name: 'TikTok'    },
];

const sectionTitle = 'text-2xl font-bold pb-3';
const contactLink = 'inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white underline-offset-4 hover:underline';

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="contenedor">
        <div className="bubbles" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span key={i} style={{
              '--left':     p.left,
              '--size':     p.size,
              '--color':    p.color,
              '--opacity':  p.opacity,
              '--duration': p.duration,
              '--delay':    p.delay,
              '--drift':    p.drift,
            } as React.CSSProperties} />
          ))}
        </div>

        <motion.main
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-sm sm:max-w-3xl lg:max-w-5xl px-4 mx-auto flex flex-col w-full gap-4 py-10 text-[#E2E2E2]"
        >
          {/* ── Hero ── */}
          <motion.div variants={item}>
            <GlowArticle className="p-6 md:p-10">
              <header className="md:flex gap-x-8 items-center">
                <div className="shrink-0 mb-4 md:mb-0">
                  <Logo />
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl font-bold">Camilo Estrada Patiño</h1>
                  <p className="text-lg font-medium text-sky-300">
                    Desarrollador Full Stack · React · Next.js · TypeScript
                  </p>
                  <p className="text-sm text-gray-300">
                    2+ años construyendo un CRM inmobiliario y un sitio web público en producción · Medellín, Colombia
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 font-semibold text-black hover:bg-sky-400 transition-colors"
                    >
                      <Mail size={18} aria-hidden="true" /> Escríbeme
                    </a>
                    <a
                      href={CV_URL}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-semibold hover:bg-white/20 transition-colors"
                    >
                      <Download size={18} aria-hidden="true" /> Descargar CV
                    </a>
                  </div>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    <li>
                      <a href={`mailto:${EMAIL}`} className={contactLink}>
                        <Mail size={16} aria-hidden="true" /> {EMAIL}
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Camiloep" target="_blank" rel="noopener noreferrer" className={contactLink}>
                        <GitHubLogo width="16" height="16" /> GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/camiloep" target="_blank" rel="noopener noreferrer" className={contactLink}>
                        <LinkedInIcon width="16" height="16" /> LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </header>
            </GlowArticle>
          </motion.div>

          {/* ── Sobre mí ── */}
          <motion.div variants={item}>
            <GlowArticle className="p-6">
              <h2 className={sectionTitle}>Sobre mí</h2>
              <p className="text-gray-300 leading-relaxed">
                Soy desarrollador full stack, tecnólogo del SENA, con más de dos años construyendo aplicaciones web
                que están en producción. Me caracterizo por ser organizado, autodidacta y constante: aprendo rápido
                tecnologías nuevas y las llevo a funcionar en proyectos reales. Mi fortaleza está en el frontend con
                React, Next.js y TypeScript, y en la integración de APIs y bases de datos con Node.js y PostgreSQL. Mi
                objetivo es unirme a un equipo de ingeniería con buenas prácticas, revisión de código, pruebas y
                despliegue continuo, donde pueda aportar desde el primer día y seguir creciendo. Mi meta es
                consolidarme como desarrollador de nivel intermedio en los próximos dos años.
              </p>
            </GlowArticle>
          </motion.div>

          {/* ── Experiencia ── */}
          <motion.div variants={item}>
            <GlowArticle className="p-6">
              <h2 className={sectionTitle}>Experiencia</h2>
              <ol className="space-y-6">
                {EXPERIENCE.map(({ company, role, period, bullets }) => (
                  <li key={company} className="relative pl-6 border-l-2 border-sky-500/50">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-500 border-2 border-black" aria-hidden="true" />
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{period}</p>
                    <h3 className="text-lg font-semibold">{role}</h3>
                    <p className="text-sm text-gray-400">{company}</p>
                    <ul className="mt-2 space-y-1 list-disc pl-5 text-sm text-gray-300">
                      {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </GlowArticle>
          </motion.div>

          {/* ── Proyectos ── */}
          <motion.div variants={item}>
            <GlowArticle className="p-6">
              <Projects />
            </GlowArticle>
          </motion.div>

          {/* ── Habilidades ── */}
          <motion.div variants={item}>
            <GlowArticle className="p-6">
              <h2 className={sectionTitle}>Habilidades</h2>
              <Skills />
            </GlowArticle>
          </motion.div>

          {/* ── Educación ── */}
          <motion.div variants={item}>
            <GlowArticle className="p-6">
              <h2 className={sectionTitle}>Educación</h2>
              <div className="relative pl-6 border-l-2 border-sky-500/50">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-500 border-2 border-black" aria-hidden="true" />
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">2022 – 2024</p>
                <h3 className="text-lg font-semibold">Tecnólogo en Análisis y Desarrollo de Software</h3>
                <p className="text-sm text-gray-400">SENA</p>
              </div>
            </GlowArticle>
          </motion.div>

          {/* ── Pie: redes personales ── */}
          <motion.footer variants={item} className="pt-4 text-center text-xs text-gray-400">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {FOOTER_LINKS.map(({ href, name }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-4 hover:underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.footer>
        </motion.main>
      </div>
    </MotionConfig>
  );
}
