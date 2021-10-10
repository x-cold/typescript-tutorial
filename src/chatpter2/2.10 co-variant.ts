// infer 在对象、类、数组和函数的返回值类型都是协变关系
type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// type of item1 is `number`
type item1 = ArrayElementType<number[]>;
// type of item1 is `{name: string}`
type item2 = ArrayElementType<{ name: string }>;






type item3 = ArrayElementType<[number, string]>;

