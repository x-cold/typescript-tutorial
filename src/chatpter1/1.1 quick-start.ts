interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

const person: Person = {
  firstName: 'Jack',
  lastName: 'Smith',
};

document.body.innerHTML = greeter(person);
