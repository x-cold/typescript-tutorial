const mixed = ['x', 1];

// 使用方式1
mixed.push(1); // (string|number)[] 更为合理



// 使用方式二
function test1(a: string, b: number) { }
test1(...mixed); // [string,number] 更为合理



// 使用方式三
function test2(a: 'x', b: 1) { }
test2(...mixed); // ['x',1] 更合理


// const first: <T>(arr: T[]) => T
const first = <T>(arr: T[]): T => {
  return arr[0];
}

// const f: number
// const first: <number>(arr: number[]) => number
const f = first([1, 2, 3]);

// const f2: string
// const first: <string>(arr: string[]) => string
const f2 = first<string>(['a', 'b', 'c']);

const makeArr = <X, Y>(x: X, y: Y) => {
  return [x, y];
}

const value = makeArr('x', 1);

// const makeArr: <X, Y>(x: X, y: Y) => [X, Y]
const makeArr2 = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

// const arr: [number, number]
// const makeArr: <number, number>(x: number, y: number) => [number, number]
const arr = makeArr(5, 6);

// const arr2: [string, string]
// const makeArr: <string, string>(x: string, y: string) => [string, string]
const arr2 = makeArr('a', 'b');

// const arr3: [string | null, number]
// const makeArr: <string | null, number>(x: string | number, y: number) => [string | null, number]
const arr3 = makeArr<string | null, number>('', 5);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

const tuple1 = makeTuple(5, 6);
const tuple2 = makeTuple<string | null, number>('', 5);
