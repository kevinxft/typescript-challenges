type Concat<T extends any[], A extends any[]> = [...T, ...A]

type Result = Concat<[1], [2]> // expected to be [1, 2]

export {}