type CamelizeKey<K> = K extends `${infer H}_${infer T}`
  ? `${H}${CamelizeKey<Capitalize<T>>}`
  : K;


// type Camelize<T> = {
//   [P in keyof T as CamelizeKey<P>]: T[P] extends object
//     ? Camelize<T[P]>
//     : T[P];
// }

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;


type CamelizeArray<T> = T extends any[]
  ? (T extends [infer F, ...infer R]
    ? [Camelize<F>, ...Camelize<R>]
    : [])
  : (T extends Record<string, any>
    ? {
      [P in keyof T as CamelizeKey<P>]: Camelize<T[P]>
    }
    : T);


type Camelize<T> = T extends any[]
  ? [Camelize<T[number]>]
  : (T extends Record<string, any>
    ? {
      [P in keyof T as CamelizeKey<P>]: Camelize<T[P]>
    }
    : T
  );

type CamelizeResult = Camelize<{
  some_prop: string;
  prop: { another_prop: string; };
  array: [{ snake_case: string; }];
}>;

// expected to be
// {
//   someProp: string;
//   prop: { anotherProp: string; };
//   array: [{ snakeCase: string; }];
// }
