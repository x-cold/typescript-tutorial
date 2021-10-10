// Union Type
type StringOrNumber = string | number;

// Generic Type
type GenericResponse<T = any> = {
  code: number;
  message: string;
  data: T;
}

// Conditional Types
type ConditionalResult = string extends StringOrNumber
  ? StringOrNumber
  : never;

// Mapped Types
type MappedSample = {
  [key: string]: boolean;
  readonly name: boolean;
}
