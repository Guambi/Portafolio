import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  /** Variante visual: 'blue' (default) | 'cyan' | 'slate' */
  variant?: 'blue' | 'cyan' | 'slate';
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:border-blue-400/60',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:border-cyan-400/60',
  slate: 'bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-slate-600',
};

/**
 * Badge reutilizable para tags técnicos, tecnologías y arquitecturas.
 * Usa fuente mono (JetBrains Mono) para transmitir contexto técnico.
 */
export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium
        border transition-colors duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
