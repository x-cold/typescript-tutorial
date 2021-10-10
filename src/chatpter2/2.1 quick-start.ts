function identity<T>(value: T): T {
  return value;
}

// number
const numberIdentity = identity(1);
// string
const stringIdentity = identity<string>('1');

console.log(identity<Number>(42));
console.log(identity('Hello'));
console.log(identity<Number>([1, 2, 3]));
