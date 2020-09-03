/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

const sumNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumNumber([6, 7, 7, 5, 4, 2, 4]));
