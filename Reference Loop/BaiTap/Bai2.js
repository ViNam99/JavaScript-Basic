/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu:
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

const sum = (numbers) => {
  let sum = 0;
  if (numbers.length < 0) return 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};
console.log(sum([5, 5]));
