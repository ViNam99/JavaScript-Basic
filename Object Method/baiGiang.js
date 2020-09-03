//  Phương thức trong Object
// Phương thức chính là một func được gắn vào trong thuộc tính

const myCrush = {
  name: "Huỳnh Yến Nhi",
  age: 21,
  gender: "female",
  love: function (herLover) {
    return `${this.name}'s lover is ${herLover.name}`;
  },
};

const herLover = {
  name: "Nhan Vĩ Nam",
  age: 21,
  gender: "male",
};

console.log(myCrush.love(herLover));
