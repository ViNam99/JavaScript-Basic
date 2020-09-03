/**
 * viết hàm has để kiểm tra xem object có tồn tại 1  xác định hay không
 * Tham số:key
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

const has = (obj, key) => {
  let flag = false;
  for (const item in obj) {
    if (item === key) flag = true;
  }
  return flag;
};

console.log(has({ name: "Tom", age: 21 }, "name"));
