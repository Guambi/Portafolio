import { useState, useCallback } from 'react';

interface UseCopyToClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
}

/**
 * Hook para copiar texto al portapapeles con feedback visual temporal.
 * El estado `copied` se resetea automáticamente después de `resetMs` ms.
 *
 * @param resetMs - Tiempo en ms antes de resetear el estado (default: 2000)
 */
export function useCopyToClipboard(resetMs = 2000): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        console.warn('useCopyToClipboard: Clipboard API no disponible.');
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetMs);
      } catch (err) {
        console.error('useCopyToClipboard: Error al copiar —', err);
        setCopied(false);
      }
    },
    [resetMs]
  );

  return { copied, copy };
}
