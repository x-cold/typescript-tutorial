// Boolean
let loading: boolean = true;

// Number
let count: number = 100;

// String
let str: string = 'string string string';

// String Literal
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// Array
// Suggest to use
let list: number[] = [1, 2, 3]; 
// Anothor style of writing: using generic
let list2: Array<number> = [1, 2, 3];

// Enum
enum ActionEnum {
  UP = 0,
  DOWM = 1,
}
let upAction = ActionEnum.UP;

// Tuple
let tupleType: [string, boolean] = ['string string string', true];

// Void
function functionWithoutReturnType(): void {
  // void = undefined | null
  if (Math.random() < 0.3) {
    return;
  }
  return null;
}

// Null
let n: null = null;

// Undefined
let u: undefined = undefined;
