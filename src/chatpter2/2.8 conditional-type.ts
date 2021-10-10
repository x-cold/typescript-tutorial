type FlattenArray<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type StrArray = FlattenArray<string[]>;
     
// Leaves the type alone.
type Num = FlattenArray<number>;
