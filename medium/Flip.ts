type Flip<T extends Record<string, any>> = {
  [K in keyof T as `${T[K]}`]: K;
};

type res1 = Flip<{ a: "x"; b: "y"; c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type res2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type res3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}

export {};
