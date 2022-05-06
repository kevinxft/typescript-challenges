type Shift<T> = T extends [infer F, ...infer Rest] ? Rest : T;

type Result = Shift<[3, 2, 1]>; // [2, 1]

export {}