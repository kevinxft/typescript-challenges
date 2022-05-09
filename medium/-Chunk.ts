type Chunk<
  T extends any[],
  U extends number,
  R extends any[] = []
> = T extends [infer F, ...infer Rest]
  ? R["length"] extends U
    ? [R, ...Chunk<T, U>]
    : Chunk<Rest, U, [...R, F]>
  : R extends []
    ? R
    : [R]

// type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
// Swap['length'] extends N
//   ? [Swap, ...Chunk<T, N>]
//   : T extends [infer K, ...infer L]
//     ? Chunk<L, N, [...Swap, K]>
//     : Swap extends [] ? Swap : [Swap]

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
type exp4 = Chunk<[1, true, 2, false], 2>

export {};
