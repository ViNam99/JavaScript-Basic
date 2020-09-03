/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
const calculate = (start, end) => {
  let multiply = 1;
  for (let i = start; i < end; i++) {
    multiply *= i;
  }
  return multiply;
};
console.log(calculate(2, 12));
