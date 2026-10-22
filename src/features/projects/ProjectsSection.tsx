import type { ProjectCaseStudy } from '@/types/portfolio.types';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectArchitectureCard } from './ProjectArchitectureCard';
import { useState } from 'react';

interface ProjectsSectionProps {
  projects: ProjectCaseStudy[];
}

type Tab = 'privado' | 'publico' | 'prototipo';

/**
 * Sección de Proyectos / Casos de Estudio.
 * Grid responsivo de cards con arquitectura y tecnologías.
 * TODO: Añadir filtros por tecnología, animaciones de entrada escalonadas
 *       (stagger) usando Intersection Observer.
 */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>('privado');

  const [projectsToShow, setProjectsToShow] = useState<ProjectCaseStudy[]>(projects.filter(project => project.type === activeTab));

  const tabs: { id: Tab; label: string }[] = [
    { id: 'privado', label: 'Privados' },
    { id: 'publico', label: 'Públicos' },
    { id: 'prototipo', label: 'Prototipos' },
  ];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setProjectsToShow(projects.filter(project => project.type === tab));
  };

  const cardContent = (projectsToShow.length !== 0) ? (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projectsToShow.map((project) => (
        <ProjectArchitectureCard key={project.id} project={project} />
      ))}
    </div>
  ) : (
    <div className="text-center text-slate-500 py-12">
      <p>No hay proyectos para mostrar en esta categoría por el momento.</p>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Casos de estudio y proyectos"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="// 01 — PROYECTOS"
          title="Casos de Estudio"
          description="Soluciones empresariales reales con arquitecturas documentadas para Ecuador, Panamá y República Dominicana."
        />

        <div className="flex px-4 pb-2" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-3 text-xs font-semibold font-mono border-b-2 transition-all duration-200 -mb-px
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        {cardContent}

      </div>
    </section>
  );
}
