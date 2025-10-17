import React, { useRef, useState } from 'react';

// Simple JS-only sandbox using an iframe with srcdoc for safety.
// For Python, integrate Pyodide or connect to external sandboxes per README instructions.
export default function CodeSandbox({ initialCode }: { initialCode: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [code, setCode] = useState(initialCode);

  const run = () => {
    const html = `<!doctype html><html><body><div id="app"></div><script>try{${code}}catch(e){document.body.innerText=String(e)}</script></body></html>`;
    if (iframeRef.current) iframeRef.current.srcdoc = html;
  };

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="font-medium">Live Sandbox (JavaScript)</p>
        <button onClick={run} className="rounded-xl bg-black text-white px-3 py-1 text-sm">Run</button>
      </div>
      <textarea
        className="mt-3 w-full h-40 rounded-xl border p-2 font-mono text-sm"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        aria-label="JavaScript code editor"
      />
      <iframe ref={iframeRef} title="sandbox" className="mt-3 w-full h-40 rounded-xl border bg-white" />
    </div>
  );
}
