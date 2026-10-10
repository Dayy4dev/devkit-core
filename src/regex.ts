export function escapeRegex(pattern: string): string {
  return pattern.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
export function matchWords(text: string): string[] {
  return text.match(/\b\w+\b/g) || [];
}
