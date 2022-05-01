interface User {
  name: string;
  age: number;
  address: string;
}

// type PartialByKeys<T, K> = 


type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

export {};
