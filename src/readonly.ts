function arraySum(arr: readonly number[]) {
  let sum = 0, num = 0;


  
  // check error
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}