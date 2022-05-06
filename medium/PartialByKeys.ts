type Copy<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, K extends keyof any = keyof T> = Copy<
  Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K>
>;

export {};
