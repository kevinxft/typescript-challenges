type CamelCase<S> = S extends `${infer F}-${infer R}`
  ? R extends Capitalize<R>
    ? `${F}-${CamelCase<R>}`
    : `${F}${CamelCase<Capitalize<R>>}`
  : S;

type o = CamelCase<"for-bar-baz-kevin-Fuck-shit">;

export {};
