type Reverse<T> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']

export {};
