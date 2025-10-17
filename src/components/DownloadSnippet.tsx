type Props = { filename: string; code: string };

export default function DownloadSnippet({ filename, code }: Props) {
  function download() {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <button onClick={download} className="btn btn-outline">Download code</button>
  );
}
