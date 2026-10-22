import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/hero/HeroSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { SkillsMatrix } from '@/features/skills/SkillsMatrix';
import { TimelineSection } from '@/features/experience/TimelineSection';
import { portafolioData } from '@/data/portafolioData';

/**
 * App — Componente raíz del portafolio.
 * Ensambla todas las secciones en el orden correcto.
 * El estado global se pasa hacia abajo desde portafolioData (prop drilling
 * mínimo dado que es una SPA de lectura sin interacciones complejas).
 */
function App() {
  const { profile, projects, skillCategories, experience } = portafolioData;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navegación fija */}
      <Navbar profile={profile} />

      {/* Contenido principal */}
      <main id="main-content">
        <HeroSection profile={profile} projectsCount={projects.length} />
        <ProjectsSection projects={projects} />
        <SkillsMatrix skillCategories={skillCategories} />
        <TimelineSection experience={experience} />
      </main>

      {/* Pie de página */}
      <Footer profile={profile} />
    </div>
  );
}

export default App;
