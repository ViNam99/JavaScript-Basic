/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */

const isPrimeNumber = x => {
    let flag = true;
    if(x < 2) flag = false;
    if(x === 2) flag = true;
    if(x % 2 === 0) flag = false;
    for(let i = 3 ; i < Math.sqrt(x) ; i += 2){
        if(x % i === 0){
            flag = true;
            break;
        }
    }
    return flag;
}
console.log(isPrimeNumber(8));