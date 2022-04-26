// type IsAny<T> = [T] extends [never] ? false : keyof any extends keyof T ? true : false

type IsAny<T> = 0 extends (1 & T) ? true : false

type h = 1 & any
type f = 1 & number

type res = 0 extends 1 ? true : false

export {}