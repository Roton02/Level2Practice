const removeDuplicates = (number: number[]): number[] => {
  return number.filter((val, i) => number.indexOf(val) === i);
};
// const removeDuplicate = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(removeDuplicate);
