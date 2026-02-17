import { useState, useCallback } from 'react';

export function useClipboard({ timeout = 2000 } = {}) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported');
        return false;
      }

      // Try to save to clipboard then save it in the state if worked
      try {
        navigator.clipboard.writeText(text).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), timeout);
        });
        return true;
      } catch (error) {
        console.warn('Copy failed', error);
        setIsCopied(false);
        return false;
      }
    },
    [timeout]
  );

  return { isCopied, copy };
}