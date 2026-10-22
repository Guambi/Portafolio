import { ArrowDown, Mail, MapPin, Copy, Check, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import type { ProfileData } from '@/types/portafolio.types';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface HeroSectionProps {
  profile: ProfileData;
  projectsCount?: number;
}

/**
 * Sección Hero principal con presentación, CTAs y datos de contacto.
 * TODO: Añadir animación de entrada (fadeInUp), partículas de fondo
 *       o gradiente animado, y efecto typewriter en el role.
 */
export function HeroSection({ profile, projectsCount = 5 }: HeroSectionProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label={`Presentación de ${profile.name}`}
    >
      {/* Fondo decorativo: glow azul centrado */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full
          bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Eyebrow — ubicación */}
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <MapPin size={14} className="text-cyan-500" aria-hidden="true" />
          <span>{profile.location}</span>
          <span className="text-slate-700">·</span>
          <span className="font-mono text-xs text-cyan-500">
            {profile.countries.join(' · ')}
          </span>
        </div>

        {/* Nombre principal */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight tracking-tight">
          {profile.name}
        </h1>

        {/* Role / Título */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl sm:text-2xl font-semibold text-blue-400">
            {profile.role}
          </p>
          <p className="text-base text-slate-400 font-mono">{profile.subtitle}</p>
        </div>

        {/* Bio */}
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
          {profile.bio}
        </p>

        {/* Stats rápidas */}
        <div className="flex items-center gap-6 sm:gap-10 my-2">
          <div className="text-center">
            <span className="block text-3xl font-bold text-slate-100">
              {profile.yearsOfExperience}+
            </span>
            <span className="text-xs text-slate-500 font-mono mt-0.5">años exp.</span>
          </div>
          <div className="w-px h-10 bg-slate-800" aria-hidden="true" />
          <div className="text-center">
            <span className="block text-3xl font-bold text-slate-100">
              {profile.countries.length}
            </span>
            <span className="text-xs text-slate-500 font-mono mt-0.5">países trabajados</span>
          </div>
          <div className="w-px h-10 bg-slate-800" aria-hidden="true" />
          <div className="text-center">
            <span className="block text-3xl font-bold text-slate-100">{projectsCount}</span>
            <span className="text-xs text-slate-500 font-mono mt-0.5">proyectos</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            id="hero-cta-projects"
            onClick={handleScrollToProjects}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white
              bg-blue-600 hover:bg-blue-500
              shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40
              transition-all duration-200 active:scale-95"
          >
            Ver Casos de Estudio
          </button>
          <a
            href={profile.cvFilename}
            download
            id="nav-download-cv"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
          >
            <Download size={14} />
            Descargar CV
          </a>
          <button
            id="hero-cta-copy-email"
            onClick={() => copy(profile.email)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
              text-slate-300 border border-slate-700
              hover:border-slate-600 hover:text-slate-100 hover:bg-slate-800/60
              transition-all duration-200 active:scale-95"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check size={14} className="text-cyan-400" />
                <span className="text-cyan-400">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                {profile.email}
              </>
            )}
          </button>
        </div>

        {/* Links sociales */}
        <div className="flex items-center gap-3 mt-2">
          <a
            id="hero-github-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${profile.name}`}
            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-100 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all"
          >
            <GithubIcon size={18} />
          </a>
          <a
            id="hero-linkedin-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${profile.name}`}
            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-100 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            id="hero-email-link"
            href={`mailto:${profile.email}`}
            aria-label={`Enviar email a ${profile.name}`}
            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-100 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollToProjects}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
          text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Desplazar hacia proyectos"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
