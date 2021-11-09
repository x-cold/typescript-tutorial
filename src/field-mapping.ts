// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

type FieldNames<Title, Key, Chilren> = {
  title: Title;
  key: Key;
  children: Chilren;
};

type ValueOrGetter<T> = (() => T) | T;

type GetTypeOfValueOrGetter<T, K extends keyof T> = T[K] extends () => any
  ? ReturnType<T[K]>
  : T[K];

type FormatKeyType<E, K> = E[K extends keyof E ? K : never];

type FormatResult<E, Title, Key, Children> = {
  title: FormatKeyType<E, Title>;
  key: FormatKeyType<E, Key>;
  children: FormatResult<E, Title, Key, Children>[];
};

export function formatTree<
  T extends object[],
  Title extends ValueOrGetter<keyof T[number]>,
  Key extends ValueOrGetter<keyof T[number]>,
  Children extends ValueOrGetter<keyof T[number]>,
  NewTitle = GetTypeOfValueOrGetter<FieldNames<Title, Key, Children>, "title">,
  NewKey = GetTypeOfValueOrGetter<FieldNames<Title, Key, Children>, "key">,
  NewChildren = GetTypeOfValueOrGetter<
    FieldNames<Title, Key, Children>,
    "children"
  >
>(
  list: T,
  fieldNames?: FieldNames<Title, Key, Children>
): FormatResult<T[number], NewTitle, NewKey, NewChildren>[] {
  return [];
}

const list = [
  {
    title1: "xxx",
    key1: 10086,
    children: [
      {
        title1: "xyyyxx",
        key1: 20000,
      },
    ],
  },
];

const fieldNames = {
  title: "title1" as const,
  key: () => "key1" as const,
  // key: 'key1' as const,
  children: "children" as const,
};

const result = formatTree(list, fieldNames);

result[0].key

result[0].children[0].title
