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
