const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = num1.concat(num2, [7, 8, 9], 'luiz');
//...rest -> ...spread;
//ele espalha o valor

// console.log(num);
// console.log(num2);

const num4 = [...num1, 'felipe',...num2, ...[7,8,9]];
console.log(num4);