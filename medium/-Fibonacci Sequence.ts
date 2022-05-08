type Fibonacci<
  T extends number,
  Index extends unknown[] = [unknown],
  Prev extends unknown[] = [],
  Cur extends unknown[] = [unknown]
> = Index["length"] extends T
  ? Cur["length"]
  : Fibonacci<T, [...Index, unknown], Cur, [...Prev, ...Cur]>;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21

export {};


