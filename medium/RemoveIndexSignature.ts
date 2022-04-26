type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};

type Foo = {
  [key: string]: any;
  [id: number]: any;
  foo(): void;
};

type res = number extends Foo['foo'] ? true : false

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

export {}
