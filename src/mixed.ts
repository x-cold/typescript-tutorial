const mixed = ['x', 1];

// 使用方式1
mixed.push(1); // (string|number)[] 更为合理



// 使用方式二
function test1(a: string, b: number) { }
test1(...mixed); // [string,number] 更为合理



// 使用方式三
function test2(a: 'x', b: 1) { }
test2(...mixed); // ['x',1] 更合理
