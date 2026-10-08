export class Logger {
  constructor(private namespace: string) {}
  info(msg: string): void { console.info(`[${this.namespace}] ${msg}`); }
  warn(msg: string): void { console.warn(`[${this.namespace}] ${msg}`); }
  error(msg: string): void { console.error(`[${this.namespace}] ${msg}`); }
}
export const createLogger = (ns: string) => new Logger(ns);
