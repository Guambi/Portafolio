import { useState } from 'react';
import { Lock, ExternalLink } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types/portafolio.types';
import { Badge } from '@/components/ui/Badge';

interface ProjectArchitectureCardProps {
  project: ProjectCaseStudy;
}

type Tab = 'reto' | 'solucion' | 'arquitectura';

/**
 * Card de caso de estudio con tabs: Reto | Solución | Arquitectura.
 * TODO: Añadir animación de transición entre tabs, efecto hover 3D,
 *       y entrada animada (Intersection Observer).
 */
export function ProjectArchitectureCard({ project }: ProjectArchitectureCardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('reto');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'reto', label: 'Reto' },
    { id: 'solucion', label: 'Solución' },
    { id: 'arquitectura', label: 'Arquitectura' },
  ];

  return (
    <article
      className="group relative flex flex-col rounded-2xl overflow-hidden
        bg-gray-900/80 backdrop-blur-sm border border-slate-800
        hover:border-blue-500/40 transition-all duration-300"
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Header de la card */}
      <header className="p-6 pb-4 border-b border-slate-800/60">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-slate-100 truncate">{project.title}</h3>
              {project.type === 'privado' && (
                <span
                  title="Código privado"
                  className="flex items-center gap-1 text-xs font-mono text-slate-500"
                >
                  <Lock size={11} />
                  privado
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 truncate">{project.client}</p>
            <p className="text-xs font-mono text-cyan-500 mt-0.5">{project.period}</p>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title} en vivo`}
              className="p-2 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all flex-shrink-0"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mt-3">{project.description}</p>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-slate-800/60 px-4" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${project.id}-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${project.id}-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
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

      {/* Contenido del tab */}
      <div className="p-6 flex-1">
        {activeTab === 'reto' && (
          <div
            id={`panel-${project.id}-reto`}
            role="tabpanel"
            aria-labelledby={`tab-${project.id}-reto`}
          >
            <p className="text-sm text-slate-400 leading-relaxed">{project.challenge}</p>
          </div>
        )}

        {activeTab === 'solucion' && (
          <div
            id={`panel-${project.id}-solucion`}
            role="tabpanel"
            aria-labelledby={`tab-${project.id}-solucion`}
          >
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        )}

        {activeTab === 'arquitectura' && (
          <div
            id={`panel-${project.id}-arquitectura`}
            role="tabpanel"
            aria-labelledby={`tab-${project.id}-arquitectura`}
            className="space-y-4"
          >
            {/* Arquitecturas por layer */}
            {Object.entries(project.architectures).map(([layer, patterns]) => (
              <div key={layer}>
                <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {layer === 'windowsService' ? 'Windows Service' : layer}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(patterns as string[] | undefined)?.map((pattern: string) => (
                    <Badge key={pattern} variant="cyan">
                      {pattern}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer: stack de tecnologías */}
      <footer className="px-6 pb-5 pt-0 border-t border-slate-800/60 mt-auto">
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="blue">
              {tech}
            </Badge>
          ))}
        </div>
      </footer>
    </article>
  );
}
