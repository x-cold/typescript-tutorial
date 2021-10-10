/* eslint @typescript-eslint/no-unused-vars: 0 */

const a: number = 10; // 不建议
const a1 = 10; // 建议，自动类型推断

const obj: { name: string, age: number } = { name: 'name', age: 18 }; // 不建议

const obj1 = { name: 'name', age: 20 }; // 建议，自动类型推断

let id = '123456';
id = 123456; // Error: 123456 can not assignable to string

// 使用 Union 声明类型
let id1: string | number = '123456';
id1 = 123456;

// 更好的方式是避免使用 Union，直接声明两个类型
const id2= '123456';
let id2Int = 123456;

// 函数返回值要显式声明类型，如果 foo 未声明返回类型，则可能受到 addOne 返回值类型的影响
function foo(a: number, b: number): number {
  return a + addOne(b);
}

// 一些使用 JavaScript 库的特殊函数
function addOne(a) {
  return a + 1;
}
