// for...in
// Dùng cho String, Array và những Object đơn giản nhưng ko phải Map và Set

const array1 = ["a", "b", "c"];
const obj1 = {
  name: "Nam",
  age: 20,
};
for (const key in array1) {
  console.log(key);
}

for (const key in obj1) {
  console.log(key + obj1[key]);
}
console.log("======================================================");
// for...of
// Dùng cho String, Array, Map, Set nhưng không dùng được trên Object cơ bản
const array2 = [
  { name: "Nam", age: 21 },
  { name: "Nhi", age: 22 },
];
for (const { name, age } of array2) {
  console.log(name, age);
}
