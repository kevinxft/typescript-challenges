type AnyOf<T extends any[]> = 
  T extends [infer F, ...infer R]
    ? F extends 0 | [] | '' | false | { [ P in any] : never }
      ? AnyOf<R>
      : true
    : false


type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

export {}