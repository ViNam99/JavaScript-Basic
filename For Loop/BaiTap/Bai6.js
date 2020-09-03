/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/

const has = (arr, value) => {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      flag = true;
    }
  }
  return flag;
};
console.log(has([5, 31, 12, 5], 3));
