export type Nullable<T> = T | null | undefined;
export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };
export type AsyncFn<T = any> = (...args: any[]) => Promise<T>;
