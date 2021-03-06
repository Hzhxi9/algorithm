/**
 *  题目
 *  输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 *
 *  分析
 *
 *  二进制或运算|：表示若两个二进制都为0，则结果为0，否则为1
 *  二进制与运算&：表示若两个二进制都为1，则结果为1，否则为0
 *  二进制否运算~: 表示若一个二进制位取反
 *  二进制异或运算^: 表示两个二进制位不相同，则结果为1，否则为0
 *
 *  左移运算符<<: m<<n 表示把m左移n位，最左边的n位将被丢弃，同时在最右边补上n个0
 *  00001010<<2 = 00101000
 *
 *  右移运算法>>: m>>n 表示把m右移n位，最右边的n位将被丢弃，同时在最左边补上n个0
 *  00001010>>2 = 00000010
 */

/**
 *
 * @param {number} n
 * @returns {number}
 */
const NumberOfOne = function (n) {
  let flag = 1,
    count = 0;
  /**当n右移为0时，跳出循环 */
  while (n) {
    /**n与flag进行与运算，为1时count递增1 */
    if (flag && n) count++;
    /**n每次右移一位 */
    n = n >> 1;
  }
  return count;
};

/**Debug */
console.log(NumberOfOne(3));
