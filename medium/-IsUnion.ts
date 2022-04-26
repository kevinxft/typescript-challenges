type helper1<T> = T extends any ? T[] : never
type helper2<T> = [T] extends [any] ? T[] : never

type IsUnion<T> = helper2<T> extends helper1<T> ? false : true

type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false

export {}