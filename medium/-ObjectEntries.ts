type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K]];
}[keyof U];

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

export {};
