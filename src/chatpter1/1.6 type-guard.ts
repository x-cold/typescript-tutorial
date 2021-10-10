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
