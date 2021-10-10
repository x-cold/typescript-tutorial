// infer 在函数的参数类型是逆变关系
type T1 = { name: string };
type T2 = { age: number };

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;

type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string




type T21 = Bar<{ a: (x: T1) => void; b: (x: T2) => void }>; // T1 & T2
