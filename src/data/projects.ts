export type Project = {
  name: string;
  period: string;
  role: string;
  description: string;
  stack: string[];
  demo?: string;      // enlace vivo, si existe
  code?: string;      // repo público, si existe
  note?: string;      // "código privado", "producto interno"
  image?: string;     // captura en /public/projects/
};

export const workProjects: Project[] = [
  {
    name: "Sitio web público de Nurent",
    period: "2024 – actualidad",
    role: "Frontend completo desde un prototipo de Figma; API en Node.js",
    description:
      "Buscador con filtros, mapa con Google Maps, fichas de inmueble, blog y área privada con autenticación. En producción desde 2024.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    demo: "https://www.nurent.co",
    image: "/projects/nurent-site.png",
  },
  {
    name: "CRM inmobiliario (Remwei)",
    period: "2025 – actualidad",
    role: "Equipo de 2 desarrolladores. Mi parte: chat de WhatsApp en tiempo real, agenda, marketing, facturación y base de datos",
    description:
      "CRM multicanal usado por 12 inmobiliarias: más de 2.000 inmuebles y 40.000 mensajes de WhatsApp al mes.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Cloudflare Workers"],
    note: "Producto interno, código privado",
    image: "/projects/crm.png",
  },
];

export const personalProjects: Project[] = [
  {
    name: "GolazoPool",
    period: "2026",
    role: "Proyecto personal de principio a fin",
    description:
      "Plataforma de pronósticos para el Mundial 2026: ligas privadas, autenticación y tabla de posiciones en tiempo real.",
    stack: ["Next.js", "TypeScript"],
    demo: "https://golazopool.vercel.app/",
    code: "https://github.com/Camiloep/GolazoPool",
    image: "/projects/golazopool.png",
  },
  {
    name: "Proyección financiera",
    period: "2026",
    role: "Proyecto personal",
    description:
      "Herramienta de planeación económica a 18 meses con acceso protegido por contraseña.",
    stack: ["Next.js", "TypeScript"],
    note: "Código privado",
    image: "/projects/proyeccion.png",
  },
  {
    name: "Portfolio personal",
    period: "2024 – 2026",
    role: "Proyecto personal",
    description: "Este sitio. Next.js 14 con TypeScript y Tailwind CSS.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    demo: "https://camiloep.vercel.app/",
    code: "https://github.com/Camiloep/portfolio-web",
  },
];
