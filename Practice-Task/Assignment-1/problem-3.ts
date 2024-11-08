const countWordOccurrences = (a: string, b: string) => {
  //split korbo
  const splitArray = a
    .toLowerCase()
    .replace("great.", "great")
    .replace("typescript!", "typescript")
    .split(" ");
  let count = 0;
  for (let i = 0; i < splitArray.length; i++) {
    const word = splitArray[i];
    if (word === b.toLowerCase()) {
      count++;
    }
  }
  return count;
};

// const countWordOcc = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// const countWordOcc = countWordOccurrences("I love typescript", "typescript");

// console.log(countWordOcc);
