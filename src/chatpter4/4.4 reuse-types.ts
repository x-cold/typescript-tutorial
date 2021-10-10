type ID = string;

interface Response {
  data: {
    id: ID;
    title: string;
    content: string;
    author: {
      id: ID;
      username: string;
    }
  };
  code: number;
}

type MyUser = Response['data']['author'];

function find(id: ID): MyUser {
  return {} as MyUser;
}

type AnotherID = Parameters<typeof find>[0]; // AnotherID === ID
type AnotherUser = ReturnType<typeof find>; // AnotherUser === MyUser

const ALL_SUITS = ['hearts', 'diamonds', 'spades', 'clubs'] as const;

type SuitTuple = typeof ALL_SUITS; // readonly ['hearts', 'diamonds', 'spades', 'clubs']

type Suit = SuitTuple[number]; // union type : 'hearts' | 'diamonds' | 'spades' | 'clubs'

enum Weekday {
  Mon = 1,
  Tue = 2,
  Wed = 3
}

type WeekdayName = keyof typeof Weekday; // 'Mon' | 'Tue' | 'Wed'
