// FooBarBaz -> foo-bar-baz

type KebabCase<S, isFirst = true> =
  S extends `${infer F}${infer R}`
  ? isFirst extends true
    ? `${Lowercase<F>}${KebabCase<R, false>}` 
    : F extends Lowercase<F>
      ? `${F}${KebabCase<R, false>}`
      : `-${Lowercase<F>}${KebabCase<R, false>}`
  : S

type result = KebabCase<"FooBarBaz">


export {};
