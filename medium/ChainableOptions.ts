declare const config: Chainable

type Chainable<Options = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<Options & { [S in K]: V}>
  get(): Options
}


const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

export {}