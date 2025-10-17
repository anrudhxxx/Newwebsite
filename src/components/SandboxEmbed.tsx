type Props = { url?: string; height?: number };
export default function SandboxEmbed({ url, height = 420 }: Props) {
  if (!url) {
    return (
      <div className="card p-4 text-sm text-gray-600">
        Provide a sandbox URL (Replit, CodeSandbox, StackBlitz) via frontmatter or props.
      </div>
    );
  }
  return (
    <div className="card overflow-hidden">
      <iframe
        title="Live code sandbox"
        src={url}
        className="w-full"
        style={{ height }}
        loading="lazy"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
      />
    </div>
  );
}
