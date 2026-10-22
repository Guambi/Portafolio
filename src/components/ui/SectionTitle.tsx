interface SectionTitleProps {
  /** Etiqueta pequeña sobre el título principal (ej: "// 01 — PROYECTOS") */
  eyebrow?: string;
  title: string;
  /** Descripción opcional bajo el título */
  description?: string;
  /** Alineación del bloque: 'left' | 'center' */
  align?: 'left' | 'center';
}

/**
 * Título estandarizado para cada sección del portafolio.
 * Incluye eyebrow en mono font, título principal y descripción opcional.
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClasses}`}>
      {eyebrow && (
        <span className="font-mono text-xs font-medium tracking-widest text-cyan-500 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      {/* Línea decorativa */}
      <div
        className={`w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
