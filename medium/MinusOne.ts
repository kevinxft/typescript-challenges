type MinusOne<N extends number, U extends unknown[] = []> = [
  ...U,
  unknown
]["length"] extends N
  ? U["length"]
  : MinusOne<N, [...U, unknown]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

export {};
