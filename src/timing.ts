export function debounce<T extends (...args: any[]) => void>(fn: T, waitMs = 300) {
  let timer: any;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), waitMs);
  };
}
