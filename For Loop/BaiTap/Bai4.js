// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

const sumMultiplyArray = (a, b) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      sum += b[j] * a[i];
    }
  }
  return sum;
};
console.log(sumMultiplyArray([1, 2, 3], [10, 20]));


