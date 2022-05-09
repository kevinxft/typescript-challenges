type IndexOf<
  T extends any[],
  U extends number,
  R extends any[] = []
> = T extends [infer F, ...infer P]
  ? T extends U
    ? P["length"]
    : IndexOf<P, U, [...R, unknown]>
  : -1;

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

export {};


// type IndexOf<T extends (string | number)[], U extends string | number, Index extends any[] = []> =Index['length'] extends T['length']
// ? -1
// : `${T[Index['length']]}` extends `${U}`
//   ? `${U}` extends `${T[Index['length']]}`
//     ? Equal<U, any> extends true
//       ? Equal<T[Index['length']], any> extends true
//         ? Index['length']
//         : IndexOf<T,U,[...Index,any]>
//       : Index['length']
//     : IndexOf<T,U,[...Index,any]>
//   : IndexOf<T, U, [...Index,any]>