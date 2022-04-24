type Absolute<T extends number> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;

type Test = 101;
type Result = Absolute<Test>; // expected to be "100"

export {};
