export function buildQuery(params: Record<string, string | number | boolean>): string {
  return Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join('&');
}
export function parseQuery(query: string): Record<string, string> {
  const q = query.startsWith('?') ? query.slice(1) : query;
  return Object.fromEntries(new URLSearchParams(q).entries());
}
