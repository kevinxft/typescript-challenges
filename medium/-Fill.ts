type Fill<T extends any[], U> = []

type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]

export {}