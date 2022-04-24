type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never

// type StringToUnion<T extends string, U extends unknown[] = []> = 
//   T extends `${infer F}${infer R}` ? StringToUnion<R, [F, ...U]> : U[number]

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

type ArrayToUnio<T extends unknown[]> = T[number]
type nums = ArrayToUnio<[1,2,3,4]>

export {}