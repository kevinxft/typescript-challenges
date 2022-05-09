type LastIndexOf<T extends any[], U extends number> = T extends [
  ...infer Rest,
  infer L
]
  ? L extends U
    ? Rest["length"]
    : LastIndexOf<Rest, U>
  : -1;

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1

export {};
