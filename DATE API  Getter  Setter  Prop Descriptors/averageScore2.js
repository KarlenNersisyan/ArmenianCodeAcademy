/*
The input is object, which keys are student's names and values are array of their scores. Find the
student with the best average score.

getBestStudent({
John: [100, 90, 80],
Bob: [100, 70, 80],
});
// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33
*/

const getBestStudent = (object) => {
  const neWObj = {};
  let averageScoreStudent;
  for (const key in object) {
    neWObj[key] =
      object[key].reduce((acc, item) => (acc += item), 0) / object[key].length;
  }

  let maxAverage = Math.max(...Object.values(neWObj));
  for (const key in neWObj) {
    if (neWObj[key] === maxAverage) {
      averageScoreStudent = key;
    }
  }
  return averageScoreStudent;
};

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
