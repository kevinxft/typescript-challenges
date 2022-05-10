type Helper<T extends number, R extends unknown[] = []> = R["length"] extends T
  ? R
  : Helper<T, [never, ...R]>;

type NumberRange<
  T extends number,
  U extends number,
  R extends unknown[] = Helper<T>
> = R["length"] extends U
  ? [...R, R["length"]][number]
  : NumberRange<T, U, [...R, R["length"]]>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export {};
