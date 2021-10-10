import React, { useState, useCallback, } from 'react';

const noop = (arg?: any) => { };
const expressionReturningFoo = noop;
const processBar = noop;
const produce = noop;

type Draft<S> = {};

// 缩小any的影响范围
function f1() {
  const x: any = expressionReturningFoo(); // 不建议,后续的x都是any了
  processBar(x);
}

function f2() {
  const x = expressionReturningFoo();
  processBar(x as any); // 建议，只有这里是any
}

// 使用更细化的 any
function getLengthBad(array: any) {
  return array.length; // 不推荐
}
function getLength(array: any[]) {
  return array.length; // 推荐
}

const numArgsBad = (...args: any) => args.length; // Return any 不推荐
const numArgs = (...args: any[]) => args.length; // Return number 推荐


// 函数签名和实现想分离：安全的签名不安全的实现
// 类型安全的签名
export function useImmer<S = any>(
  initialValue: S | (() => S)
): [S, (f: (draft: Draft<S>) => void | S) => void];
// 没那么安全的实现
export function useImmer(initialValue: any) {
  const [val, updateValue] = useState(initialValue);
  return [
    val,
    useCallback(updater => {
      updateValue(produce(updater));
    }, [])
  ];
}

const output = []; // any[]
output.push(1);
console.log(output); // number[]
output.push('2');
console.log(output); // (number|string)[]

// 使用 unknown 代替 any
function prettyPrint(x: unknown): string {
  if (Array.isArray(x)) {
    return '[' + x.map(prettyPrint).join(', ') + ']'
  }
  if (typeof x === 'string') {
    return `'${x}'`
  }
  if (typeof x === 'number') {
    return String(x);
  }
  return 'etc.';
}

function prettyPrintAny(x: any): string {
  if (Array.isArray(x)) { // isArray 非类型守卫
    return '[' + x.map(prettyPrint).join(', ')
  }
  return 'ect.'
}

console.log(prettyPrint('1'));
