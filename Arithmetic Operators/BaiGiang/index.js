// Các phép toán số học trong lập trình
// 1. ++ --
// 2. * / %
// 3. + -

//VD:
a = 5 + ((6 / 3) % 2);
console.log(a);

//Các phép tính ++ --
// ++a: Thay đổi giá trị a ngay lúc đó và trả lại giá trị đã được tăng rồi
// a++ : Thaty đổi giá trị a ngay lúc đó và trả lại giá trị chưa được tăng
var num1 = 8;
var num2 = 3;
var num3 = num1++ + --num1 + num1-- + num1++ + num2++ * --num2;
console.log(num3);
