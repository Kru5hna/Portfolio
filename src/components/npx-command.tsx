"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface NpxCommandProps {
  command?: string;
}

export default function NpxCommand({ command = "npx krushna" }: NpxCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="more-section">
      <div className="more-command-wrap">
        <div className="more-command">
          <span className="more-prompt">%</span>
          <code>{command}</code>
        </div>
        <button
          type="button"
          className="more-copy-btn"
          onClick={handleCopy}
          aria-label={`Copy ${command}`}
          title={copied ? "Copied!" : "Copy"}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
