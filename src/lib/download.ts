export async function download() {
  const code = document.getElementById("code");
  const img = <HTMLImageElement>code?.children[1];
  
  const res = await fetch(img.currentSrc);
  const blob = await res.blob();
  const imageURL = URL.createObjectURL(blob);
  const link = document.createElement('a')
  link.href = imageURL
  link.download = 'QR Code'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
