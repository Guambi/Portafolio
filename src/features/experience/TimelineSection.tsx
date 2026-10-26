import { Briefcase, GraduationCap } from 'lucide-react';
import type { ExperienceItem } from '@/types/portafolio.types';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface TimelineSectionProps {
  experience: ExperienceItem[];
}

/**
 * Sección de Experiencia laboral y Educación en formato timeline vertical.
 * TODO: Añadir animación de entrada item por item con Intersection Observer,
 *       filtros Work | Education, y expandir highlights con un acordeón.
 */
export function TimelineSection({ experience }: TimelineSectionProps) {
  // Separar trabajo de educación para dos columnas
  const workItems = experience.filter((e) => e.type === 'work').sort((a, b) => b.period.localeCompare(a.period));
  const educationItems = experience.filter((e) => e.type === 'education').sort((a, b) => b.period.localeCompare(a.period));

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Experiencia laboral y formación académica"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="// 03 — TRAYECTORIA"
          title="Experiencia & Educación"
          description="Mi recorrido profesional y formación académica en ingeniería de software y diseño UX."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna de Trabajo */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono font-semibold text-blue-400 uppercase tracking-wider mb-8">
              <Briefcase size={14} aria-hidden="true" />
              Experiencia Laboral
            </h3>
            <TimelineList items={workItems} />
          </div>

          {/* Columna de Educación */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-8">
              <GraduationCap size={14} aria-hidden="true" />
              Formación Académica
            </h3>
            <TimelineList items={educationItems} accentColor="cyan" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sub-componente: lista de timeline ───────────────────────────────────────

interface TimelineListProps {
  items: ExperienceItem[];
  accentColor?: 'blue' | 'cyan';
}

function TimelineList({ items, accentColor = 'blue' }: TimelineListProps) {
  const dotColor = accentColor === 'cyan' ? 'bg-cyan-500' : 'bg-blue-500';

  return (
    <ol className="relative space-y-8 border-l border-slate-800 pl-6" aria-label="Timeline">
      {items.map((item) => (
        <li key={item.id} className="relative">
          {/* Punto de timeline */}
          <span
            className={`absolute -left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-slate-950 ${dotColor}`}
            aria-hidden="true"
          />

          {/* Card del item */}
          <article
            className="p-5 rounded-xl bg-gray-900/60 border border-slate-800/60
              hover:border-slate-700 transition-colors duration-200"
          >
            {/* Período */}
            <time className="text-xs font-mono text-slate-500 block mb-2">
              {item.period}
              {item.current && (
                <span className={`ml-2 font-semibold ${accentColor === 'cyan' ? 'text-cyan-500' : 'text-blue-400'}`}>
                  · Actual
                </span>
              )}
            </time>

            {/* Rol */}
            <h4 className="text-base font-semibold text-slate-100 leading-tight">{item.role}</h4>
            <p className="text-sm text-slate-400 mt-0.5">{item.company}</p>

            {/* GPA (educación) */}
            {item.gpa && (
              <span className={`inline-block text-xs font-mono mt-1.5 px-2 py-0.5 rounded ${accentColor === 'cyan'
                ? 'bg-cyan-500/10 text-cyan-400'
                : 'bg-blue-500/10 text-blue-400'
                }`}>
                {item.gpa}
              </span>
            )}

            {/* Highlights */}
            {item.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5" role="list">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                    <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${dotColor}`} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}
