export function generateQRCode(url: string, size: number) {
  // @ts-ignore
  const code = new QRCode('code', {
    text: url,
    width: size,
    height: size
  })
}
