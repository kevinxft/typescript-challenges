// 解答をここに記入
type String2Union<S extends string> = S extends `${infer C}${infer REST}`
  ? C | String2Union<REST>
  : never;

type AllCombinations<
  STR extends string,
  S extends string = String2Union<STR>
> = [S] extends [never]
  ? ""
  : "" | { [K in S]: `${K}${AllCombinations<never, Exclude<S, K>>}` }[S];

type AllCombinationsTest = AllCombinations<"abcdefgh">;
// -> type AllCombinationsTest = "" | "abcdefgh" | "a" | "bcdefgh" | "b" | "cdefgh" | "c" | "defgh" | "d" | "efgh" | "e" |
//    "fgh" | "f" | "gh" | "g" | "h" | "hg" | "fg" | "fh" | "fhg" | "hf" | "gf" | "gfh" | "ghf" | "hfg" | ... 109575 more
//    ... | "hgfedcba"
// your answers
// type AllCombinations<
//   S extends string,
//   PRE extends string = ""
// > = S extends `${infer L}${infer POST}`
//   ?
//       | `${L}${AllCombinations<`${POST}${PRE}`>}`
//       | AllCombinations<POST, `${PRE}${L}`>
//   : "";

export {};
