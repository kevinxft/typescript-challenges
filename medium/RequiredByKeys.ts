type Copy<T> = { [K in keyof T]: T[K] };

type RequiredByKeys<T, K = keyof T> = Copy<
  Required<{ [P in keyof T as P extends K ? P : never]: T[P] }> & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;

export {};
