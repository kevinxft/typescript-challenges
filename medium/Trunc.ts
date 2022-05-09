type Trunc<T extends number | string> = `${T}` extends `${infer F}.${infer D}`
  ? F
  : `${T}`;

type A = Trunc<12.34>; // 12
type B = Trunc<19>; // 12

export {};
