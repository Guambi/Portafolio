// ============================================================
// portfolio.types.ts
// Single source of truth para todas las interfaces del portafolio.
// ============================================================

// ----------------------------
// 1. Perfil / Datos personales
// ----------------------------
export interface ProfileData {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  cvFilename: string;
  yearsOfExperience: number;
  countries: string[];
}

// ----------------------------
// 2. Proyectos / Casos de Estudio
// ----------------------------

/**
 * Descripción de la arquitectura técnica de un proyecto.
 * Cada clave es opcional porque no todos los proyectos tienen
 * todos los layers (mobile, backend, frontend, windowsService).
 */
export interface ProjectArchitectures {
  mobile?: string[];
  backend?: string[];
  frontend?: string[];
  windowsService?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  period: string;
  description: string;
  challenge: string;
  solution: string;
  architectures: ProjectArchitectures;
  technologies: string[];
  type: string;
  liveUrl?: string;
}

// ----------------------------
// 3. Habilidades / Skills Matrix
// ----------------------------

export type SkillLevel = 'Experto' | 'Avanzado' | 'Intermedio' | 'Básico';

export interface Skill {
  name: string;
  years: number;
  level: SkillLevel;
}

export interface SkillCategory {
  categoryName: string;
  icon?: string; // nombre del ícono de Lucide
  skills: Skill[];
}

// ----------------------------
// 4. Experiencia / Educación
// ----------------------------

export type ExperienceType = 'work' | 'education';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  type: ExperienceType;
  gpa?: string; // Para educación: PGA
  location?: string;
  current?: boolean;
}

// ----------------------------
// 5. Tipo raíz del portafolio
// ----------------------------
export interface PortfolioData {
  profile: ProfileData;
  projects: ProjectCaseStudy[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
}
