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
