type Helper<T extends number | number[]> = T extends number[] ? T[number] : T;

type Without<
  T extends any[],
  U extends number | number[],
  Result extends unknown[] = []
> = T extends [infer F, ...infer R]
  ? F extends Helper<U>
    ? Without<R, U, [...Result]>
    : Without<R, U, [...Result, F]>
  : [...Result, ...T];

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

export {};

type Expand<T extends number | number[]> = T extends number[] ? T[number] : T;

// type Without<T extends unknown[], U extends number | number[],Result extends unknown[]= []> = T extends [infer F, ...infer R]
// ? F extends Expand<U>
//   ? Without<R, U, [...Result]>
//   : Without<R, U, [...Result, F]>
// : [...Result,...T]
