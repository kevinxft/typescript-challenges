// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = `${B}${E["length"] extends 0 ? "" : `__${E[number]}`}${M["length"] extends 0
//   ? ""
//   : `--${M[number]}`}`;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E["length"] extends 0 ? "" : `__${E[number]}`}${M["length"] extends 0
  ? ""
  : `--${M[number]}`}`;

type res1 = BEM<"btn", ["price"], []>;
type res2 = BEM<"btn", ["price"], ["warning", "success"]>;
type res3 = BEM<"btn", [], ["small", "medium", "large"]>;

export {};
