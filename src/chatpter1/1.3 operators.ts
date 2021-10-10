// "keyof" Type Operator
type Point = { x: number; y: number; };
type keyOfPoint = keyof Point; // "x" | "y"

type NumberRecord = { [k: string]: number; };
type KeyOfNumberRecord = keyof NumberRecord; // string | number

// "typeof" Type Operator
let typeOfString = 'hello';
type TypeOfString = typeof typeOfString; // string

// Indexed Access Operator
class Account {
  age: number;
  name: string;
  alive: boolean;
};

type Age = Account['age']; // number

// "instanceof" Type Operator (the same as "instanceof" in JavaScript)
const account = new Account();
const itShouldBeTruth = account instanceof Account;
