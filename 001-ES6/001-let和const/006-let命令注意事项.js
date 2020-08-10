/**
 * 1. 不存在变量提升
 *  相比较 var 命令， let 命令不会发生 “变量提升” 的现象，因此，变量一定要在声明以后使用，否则会出错
 * 
 * 2. 暂时性死区
 *  所谓的 “暂时性死区” 指的就是：在代码块内部，使用 let 命令声明变量之前，该变量都是不可用的
 * 
 * 3. 不允许重复声明
 *  let 不允许在相同的作用域内重复声明一个变量；如果使用 var 声明变量是没有这个限制的
 */