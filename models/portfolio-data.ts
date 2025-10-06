export interface ContactInfo {
  name: string
  title: string
  location: string
  phone: string
  email: string
  linkedin?: string
  whatsapp?: string
  github?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

// Portfolio data - Single source of truth
export const portfolioData = {
  contact: {
    name: "Cheikh Ahmadou Bamba Ndiaye",
    title: "Développeur Full-Stack",
    location: "Keur Massar - Medina Kelle, Sénégal",
    phone: "+221778834783",
    email: "bambandiaye386@gmail.com",
    whatsapp: "+221778834783",
    linkedin: "bamba-ndiaye",
    github: "bambandiaye",
  } as ContactInfo,

  education: [
    {
      degree: "Développement Web et Mobile",
      institution: "Orange Digital Center",
      period: "2024-2025",
    },
    {
      degree: "Baccalauréat Série S2",
      institution: "Lycée Zone de Recasement de Keur Massar",
      period: "2018-2019",
    },
  ] as Education[],

  projects: [
    {
      id: "1",
      title: "Application de Gestion d'Étudiants",
      description: "CRUD complet avec interface intuitive pour la gestion des étudiants",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    },
    {
      id: "2",
      title: "Messagerie Web en Temps Réel",
      description: "Gestion des contacts et chat en temps réel avec JavaScript Vanilla",
      technologies: ["JavaScript", "WebSocket", "Node.js", "HTML/CSS"],
    },
    {
      id: "3",
      title: "Site E-commerce",
      description: "Développement complet d'une plateforme e-commerce avec PrestaShop",
      technologies: ["PrestaShop", "PHP", "MySQL", "JavaScript"],
    },
    {
      id: "4",
      title: "Site Web Institutionnel",
      description: "Design responsive et développement moderne pour une institution",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ] as Project[],

  skills: [
    {
      category: "Frontend",
      items: ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["PHP", "Laravel", "Node.js", "Python"],
    },
    {
      category: "Bases de Données",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      category: "CMS & Outils",
      items: ["PrestaShop", "WordPress", "Figma", "Git", "Linux"],
    },
  ] as Skill[],

  softSkills: [
    "Sens de la pédagogie",
    "Gestion de projet",
    "Esprit d'équipe",
    "Créativité",
    "Autonomie",
    "Esprit entrepreneurial",
  ],

  languages: [
    { name: "Français", level: "Avancé" },
    { name: "Anglais", level: "Intermédiaire" },
  ],

  interests: ["Bénévolat", "Sport", "Art et Lecture"],
}
