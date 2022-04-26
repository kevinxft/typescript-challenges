// type DiffKey<T, U> = Exclude<T, U> | Exclude<U, T>;

// type Diff<T, U> = {
//   [P in DiffKey<keyof T, keyof U>]: P extends keyof T
//     ? T[P]
//     : P extends keyof U
//     ? U[P]
//     : never;
// };

type Diff<T, U> = T extends U
  ? {
      [P in keyof T as Exclude<P, keyof U>]: T[P];
    }
  : {
      [P in keyof U as Exclude<P, keyof T>]: U[P];
    };

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type r = Diff<Foo, Bar>;

export {};
