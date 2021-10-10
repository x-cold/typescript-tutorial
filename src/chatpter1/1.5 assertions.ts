// "<>" syntax
let anyString: any = 'this is a string';
let strLength: number = (<string>anyString).length;

// "as" sytax
let anyString2: any = 'this is a string 2';
let strLength2: number = (anyString2 as string).length;
