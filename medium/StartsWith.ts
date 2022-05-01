// type StartsWith<T, U> = T extends `${infer F1}${infer R1}`
//   ? U extends `${infer F2}${infer R2}`
//     ? F1 extends F2
//       ? StartsWith<R1, R2>
//       : false
//     : true
//   : U extends `${infer F}${infer R}`
//   ? false
//   : true;

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}`
  ? true
  : false;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

export {};
