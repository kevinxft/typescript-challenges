type Join<T extends any[], U extends string | number, R extends string = ""> = T extends [
  infer F,
  ...infer Rest
]
  ? R extends ""
    ? Join<Rest, U, `${F & string}`>
    : Join<Rest, U, `${R}${U}${F & string}`>
  : R;

type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'

export {};
  