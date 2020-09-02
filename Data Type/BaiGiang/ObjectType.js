// Dùng để mô tả 1 sự vật có những tính chất khác nhau
// 1 Object bao gồm 2 phần : thuộc tính và phương thức
// Thuộc tính là những tính chất của Object đó
// Phương thức là những hành động của Object đó (là hàm trong Object)

//VD:
var person = {
  name: "Nhan Vi Nam",
  age: 21,
  isMale: true,
};

console.log(person.name);
console.log(person["isMale"]);

person.name = "Huỳnh Yến Nhi";
console.log(person);
