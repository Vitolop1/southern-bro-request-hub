export function generateRequestId(prefix: string = "REQ") {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${random}`;
}