type Flatten<T extends any[]> = 
  T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...Flatten<F>, ...Flatten<R>]
      : [F, ...Flatten<R>]
    : []



type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]


type T1 = [1, 2, 3, 4] extends [infer F, infer R] ? R : never  // T = never
type T2 = [1, 2] extends [infer F, infer R] ? R : never  // T = 2
type T3 = [1, 2, 3, 4] extends [infer F, ...infer R] ? R : never  // T = [2, 3, 4]
type T4 = [1, 2] extends [infer F, ...infer R] ? R : never  // T = [2]
type T5 = [1] extends [infer F, ...infer R] ? R : never // T = []

export {}