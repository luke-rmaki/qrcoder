export async function copyToClipboard() {
  const code = document.getElementById("code");
  const img = <HTMLImageElement>code?.children[1];
  
  const res = await fetch(img.currentSrc);
  const blob = await res.blob();
  await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]) 
}
