function arraySum(arr: readonly number[]) {
  let sum = 0, num = 0;


  
  // check error
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}

interface Foo {
  readonly bar: number;
}

let foo: Foo = {
  bar: 123,
};

function iTakeFoo(foo: Foo) {
  foo.bar = 456; // Error: bar is readonly
}

iTakeFoo(foo);
