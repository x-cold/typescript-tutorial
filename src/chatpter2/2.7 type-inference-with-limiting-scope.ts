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
