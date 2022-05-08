type GreaterThan<T, U, L extends unknown[] = []> = L["length"] extends T
  ? false
  : L["length"] extends U
  ? true
  : GreaterThan<T, U, [...L, unknown]>;

type res1 = GreaterThan<2, 1>; //should be true
type res2 = GreaterThan<1, 1>; //should be false
type res3 = GreaterThan<10, 100>; //should be false
type res4 = GreaterThan<111, 11>; //should be true

export {};
