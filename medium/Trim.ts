type Space = ' ' | '\n' | '\t'

// type TrimRight<S extends string> = S extends `${Space}${infer R}` ? TrimRight<R> : S
// type TrimLeft<S extends string> = S extends `${infer L}${Space}` ? TrimLeft<L> : S
// type Trim<T extends string> = TrimLeft<TrimRight<T>>

type Trim<T> = T extends `${Space}${infer R}` ? Trim<R> : T extends `${infer L}${Space}` ? Trim<L> : T

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

export {}