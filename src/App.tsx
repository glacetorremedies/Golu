/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Check, Copy, Download, X } from 'lucide-react';

const SITE_ASSET_PATH =
  '/assets/aistudio/Glacetor_Remedies_Pvt._Ltd.___Science-led_Pharmaceuticals_9247fd5d.html';
const DOWNLOAD_HTML_PATH = '/Glacetor-Remedies-Website.html';

export default function App() {
  const [showDownload, setShowDownload] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      const res = await fetch(DOWNLOAD_HTML_PATH);
      const html = await res.text();
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-white">
      <iframe
        src={SITE_ASSET_PATH}
        title="Glacetor Remedies Pvt. Ltd. | Science-led Pharmaceuticals"
        className="block h-full w-full border-0"
      />
      {showDownload && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-slate-900/90 p-1 pl-3 text-white shadow-xl backdrop-blur-md">
          <a
            href={DOWNLOAD_HTML_PATH}
            download="index.html"
            className="flex items-center gap-1.5 px-1 text-xs font-semibold tracking-wide text-white no-underline hover:text-cyan-300"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download index.html</span>
          </a>
          <span className="h-3.5 w-px bg-white/20" />
          <button
            type="button"
            onClick={handleCopyCode}
            className="flex cursor-pointer items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold text-cyan-300 transition hover:bg-white/10"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowDownload(false)}
            aria-label="Hide download bar"
            className="grid h-6 w-6 cursor-pointer place-items-center rounded-full text-slate-300 transition hover:bg-white/15 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </main>
  );
}
