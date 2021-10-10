// Union Type
type StringOrNumberOrBoolean = string | number | boolean;

// Intersection Type
type Animal = {
  name: string;
}

type Bear = Animal & {
  honey: boolean;
}

// Keyof Type Operator
type Point = { x: number; y: number; };
type P = keyof Point; // "x" | "y"

type NumberRecord = { [k: string]: number; };
type M = keyof NumberRecord; // string | number

// Typeof Type Operator
let s = "hello";
type StringType = typeof s; // string

// Indexed Access Operator
type Person = { age: number; name: string; alive: boolean; };
type Age = Person["age"]; // number

// Generic Type
type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
}

// Conditional Types
type Result = Point extends NumberRecord ? P : never;

// Mapped Types
type OnlyBoolsAndPoints = {
  [key: string]: boolean | Point;
  notRequired?: boolean;
  readonly p: Point;
}

// "<>" syntax
let anyString: any = 'this is a string';
let strLength: number = (<string>anyString).length;

// "as" sytax
let anyString2: any = 'this is a string 2';
let strLength2: number = (anyString2 as string).length;

// A type guard is some expression that performs a runtime check that guarantees the type in some scope. 
class User { name: string; }
type Admin = User & { privileges: string[]; }
class Guess extends User { menus: string[]; }

function printUserInfo(user: User | Admin | Guess | string | number) {
  if (typeof user === 'string') { // "typeof" keyword
    console.log('UserName: ' + user);
  } else if (isNumber(user)) { // custom type guard
    console.log('UserId: ' + user);
  } else if ('privileges' in user) { // "in" keyword
    console.log('Privileges: ' + user.privileges);
  } else if (user instanceof Guess) { // "instanceof" keyword
    console.log('Menus: ' + user.menus);
  } else {
    console.log('Name: ' + user.name);
  }
}

// "is" keyword: custom type guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
