/**
 * let 声明的变量，只在它所对应的块级作用域内生效
 */

// for (var i = 1; i <= 10; i++) {
//   console.log(i)
// }
// console.log(i) // 11

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// let 声明的变量只能够在它所对应的代码块内生效 
console.log(i) // i is not defined 
