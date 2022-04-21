interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

// type LookUp<U, T extends string> = {
//   [K in T]: U extends { type: T} ? U : never
// }[T]

//  simpler
type LookUp<U, T> = U extends {type: T} ? U : never;

type MyDogType = LookUp<Cat | Dog, 'cat'> // expected to be `Dog`