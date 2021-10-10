type GetLabelTypeFromObject<T> = T extends { label: infer R } ? R : never

type Result = GetLabelTypeFromObject<{ label: string }>;

// 这里如果直接使用 T[0] 返回第一项的类型是不被允许的，因为泛型时一个整体
// type GetFirstParamTypeWithError<T> = T extends (...args) => any ? T[0] : never

type GetFirstParamType<T> = T extends (...args: infer R) => any ? R[0] : never


// 逆变与协变
// infer 在对象、类、数组和函数的返回值类型都是协变关系
type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// type of item1 is `number`
type item1 = ArrayElementType<number[]>;
// type of item1 is `{name: string}`
type item2 = ArrayElementType<{ name: string }>;






type item3 = ArrayElementType<[number, string]>;


// infer 在函数的参数类型是逆变关系
type T1 = { name: string };
type T2 = { age: number };

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;

type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string




type T21 = Bar<{ a: (x: T1) => void; b: (x: T2) => void }>; // T1 & T2
