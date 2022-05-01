type DropChar<S, K> = S extends `${infer F}${infer R}`
  ? F extends K
    ? DropChar<R, K>
    : `${F}${DropChar<R, K>}`
  : S;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

export {};
