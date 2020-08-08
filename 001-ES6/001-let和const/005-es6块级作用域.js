/**
 * 1、let 实际上位 JavaScript 新增了块级作用域
 * 
 * 2、块级作用域的出现，带来的好处：
 *  之前获得广泛使用的立即执行匿名函数将不再需要
 * 
 * 3、匿名函数的函数：
 *  通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个私有空间
 * 该空间内部的属性和方法，不会破坏污染影响全局的空间
 */

// 实例 1

// function test () {
//   let num = 5
//   if (true) {
//     // let 创建的 num 只在这一个块级作用域中，外部获取不到
//     let num = 1
//     console.log(num)
//   }
//   console.log(num) // 5
// }

// test()

// 实例 2

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i) // 3, 3, 3
//   }, 1000)
// }

// 匿名函数版本
// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i) // 3, 3, 3
//     }, 1000)
//   })(i)
// }

// let 版本
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i) // 3, 3, 3
  }, 1000)
}
