
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

interface User {
  firstName: string;
  lastName: string;
}

const makeFullName = <T extends User>(
  obj: T
) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

/*
const obj: {
    firstName: string;
    lastName: string;
    age: number;
} & {
    fullName: string;
}
 */
const obj = makeFullName({ firstName: 'jack', lastName: 'ma', age: 50 });

/*
const obj2: User & {
    fullName: string;
}
*/
const obj2 = makeFullName({ another: 'jack', lastName: 'ma', age: 50 });


// default generic type
interface Tab<K = any, E = HTMLDivElement> {
  title: string;
  key: K;
  element: E;
}

type DivTab = Tab<number, HTMLDivElement>;
type SpanTab = Tab<string, HTMLSpanElement>;

const tab1: DivTab = {
  title: 'tab1',
  key: 1,
  element: document.createElement('div'),
};

// Tab<any, HTMLDivElement>
const tab2: Tab = {
  ...tab1,
  title: 'tab2',
};

const tab3: SpanTab = {
  title: 'tab1',
  key: '1',
  element: document.createElement('span'),
};

interface GenericInterface<V> {
  value: V;
  getEntity: () => V;
};

class GenericClass<T> implements GenericInterface<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getEntity(): T {
    return this.value;
  }
}

const numberEntity = new GenericClass<number>(999);
// number
console.log(numberEntity.getEntity());

const stringEntity = new GenericClass<string>("yi dao 999!");
// string
console.log(stringEntity.getEntity());



interface U {
  type: string;
};
interface X {
  x: string;
}

interface Y {
  y: string;
}

// interface Condition<T extends U ? infer U X : Y> {

// }


interface Dictionary<T = any> {
  [key: string]: T;
}
 
type StrDict = Dictionary<string>

type DictMember<T> = T extends Dictionary<infer V> ? V : never
type StrDictMember = DictMember<StrDict> // string


type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type StrArray = Flatten<string[]>;
     
// Leaves the type alone.
type Num = Flatten<number>;
