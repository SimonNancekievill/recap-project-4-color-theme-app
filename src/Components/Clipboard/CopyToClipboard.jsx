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
      setTimeout(() => {
        setCopyConfirmation(false);
      }, 3000);
    }
  }, [copyConfirmation]);

  return (
    <button type="button" onClick={handleCopyToClipboard}>
      {copyConfirmation ? "Copied!" : `Copy to Clipboard`}
    </button>
  );
}
