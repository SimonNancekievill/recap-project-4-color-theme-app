import { useState, useEffect } from "react";

export default function CopyToClipboard({ hex }) {
  const [copyConfirmation, setCopyConfirmation] = useState(false);
  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(hex);
      setCopyConfirmation(true);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (copyConfirmation) {
      const timeout = setTimeout(() => {
        setCopyConfirmation(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copyConfirmation]);

  return (
    <button type="button" onClick={handleCopyToClipboard}>
      {copyConfirmation ? "Copied!" : `Copy to Clipboard`}
    </button>
  );
}
