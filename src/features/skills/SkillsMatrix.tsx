import type { SkillCategory } from '@/types/portafolio.types';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface SkillsMatrixProps {
  skillCategories: SkillCategory[];
}

/** Mapa visual para el nivel de habilidad → porcentaje de la barra */
const levelToPercent: Record<string, number> = {
  Experto: 100,
  Avanzado: 75,
  Intermedio: 50,
  Básico: 25,
};

/** Color de acento según nivel */
const levelToColor: Record<string, string> = {
  Experto: 'bg-blue-500',
  Avanzado: 'bg-blue-400',
  Intermedio: 'bg-cyan-500',
  Básico: 'bg-slate-500',
};

/**
 * Matriz de habilidades agrupada por categoría.
 * TODO: Añadir animación de la barra de progreso al entrar en viewport
 *       (Intersection Observer + CSS transition), íconos de Lucide por
 *       categoría, y tooltip con detalle de experiencia.
 */
export function SkillsMatrix({ skillCategories }: SkillsMatrixProps) {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
      aria-label="Matriz de habilidades técnicas"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="// 02 — SKILLS"
          title="Stack Técnico"
          description="Habilidades organizadas por área, con años de experiencia y nivel de dominio."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.categoryName}
              className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-slate-800
                hover:border-slate-700 transition-colors duration-300"
            >
              {/* Nombre de categoría */}
              <h3 className="text-sm font-mono font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                {category.categoryName}
              </h3>

              {/* Lista de skills */}
              <ul className="space-y-4" role="list">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      <span className="text-xs font-mono text-slate-500">
                        {skill.years}y
                      </span>
                    </div>
                    {/* Barra de progreso */}
                    <div
                      className="h-1 rounded-full bg-slate-800 overflow-hidden"
                      role="progressbar"
                      aria-valuenow={levelToPercent[skill.level]}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name}: ${skill.level}`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${levelToColor[skill.level]}`}
                        style={{ width: `${levelToPercent[skill.level]}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-600 mt-0.5 font-mono">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
