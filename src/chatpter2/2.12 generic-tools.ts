// https://github.com/microsoft/TypeScript/blob/main/lib/lib.es5.d.ts

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type RequiredPick<T, K extends keyof T> = {
  [P in K]-?: T[P];
}

export type Exclude<T, U> = T extends U ? never : T;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type ReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : any;

export type Flatten<T> = T extends any[] ? T[number] : T;

/**
* UnionToIntersection<{ foo: string } | { bar: string }> =
*  { foo: string } & { bar: string }.
*/
export type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never;

/**
 * LastInUnion<1 | 2> = 2.
 */
export type LastInUnion<U> = UnionToIntersection<
  U extends unknown ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never;

/**
 * UnionToTuple<1 | 2> = [1, 2].
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last];
