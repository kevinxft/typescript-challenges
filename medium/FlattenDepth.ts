type FlattenDepth<T, C = 1, U extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends any[]
    ? U["length"] extends C
      ? [F, ...FlattenDepth<R, C, U>]
      : [...FlattenDepth<F, C, [unknown, ...U]>, ...FlattenDepth<R, C, U>]
    : [F, ...FlattenDepth<R, C, U>]
  : T;

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

export {};
