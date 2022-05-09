type TrimRight<T extends string> = T extends `${infer Rest}${" " | "\n" | "\t"}`
  ? TrimRight<Rest>
  : T;

type Trimed = TrimRight<"   Hello World    ">; // expected to be '   Hello World'

export {};
