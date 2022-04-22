type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

// type Capitalize<S extends string> = intrinsic
// your answers
type Capitalize<S extends string> = S extends `${infer F}${infer Rest}` ? `${Uppercase<F>}${Rest}` : S

export {}