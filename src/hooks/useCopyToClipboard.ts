// @ts-nocheck
import { useCallback, useState } from "react";

export function useCopyToClipboard(resetTime, ) {
const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (textToBeCopied, errorMessage = "Could not copy to clipboard") => {
      try {
        await navigator.clipboard.writeText(textToBeCopied);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, resetTime);

        return true;
      } catch (err) {
        console.error("Failed to copy: ", err);
        alert(errorMessage);
        return false;
      }
    },
    [resetTime]
  );

  return { copied, copyToClipboard };
}
