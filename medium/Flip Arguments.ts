type Helper<T> = T extends [infer F, ...infer R] ? [...Helper<R>, F] : [];

type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer Args
) => infer R
  ? (...args: Helper<Args>) => R
  : never;

type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void

export {};
