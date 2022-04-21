type BorderColor = 'black' | 'red' | 'pink' | string & {}

let color: BorderColor = 'black'

enum Day {
    SUNDAY,
    MONDAY
}

// const work = (x: Day) => {
//     if (x !== Day.SUNDAY || x !== Day.MONDAY) {
        
//     }
// }
type StringOrNumberArray<E> = E extends string | number ? E[] : E;
type BooleanOrString = string | boolean;
type WhatIsThis = StringOrNumberArray<BooleanOrString>; // 好像应该是 string | boolean ?