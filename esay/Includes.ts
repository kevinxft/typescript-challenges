type Equal<U, T> = U extends T ? true : false
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<U, First> extends true ? true : Includes<Rest, U> : false
// 首先用infer取出第一个，然后比价相等，不相等就递归调用比较
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

export { }