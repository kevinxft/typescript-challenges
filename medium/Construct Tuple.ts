type ConstructTuple<
  T extends number,
  R extends unknown[] = []
> = R["length"] extends T ? R : ConstructTuple<T, [...R, unknown]>;

type result = ConstructTuple<2>; // expect to be [unknown, unkonwn]

export {};
