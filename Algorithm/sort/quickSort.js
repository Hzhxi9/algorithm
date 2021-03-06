/**
 *  快速排序
 *
 *  思想
 *  通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
 *
 *  实现步骤
 *  1. 选择一个基准元素target（一般选择第一个数）
 *  2. 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 *  3. 分别对target左侧和右侧的元素进行快速排序
 */

/**
 * 解法一
 * 单独开辟两个存储空间left和right来存储每次递归比target小和大的序列
 * 每次递归直接返回left、target、right拼接后的数组
 *
 * @param {number[]} array
 * @return {number[]}
 */
const quickSort = function (array) {
  if (array.length < 2) return array;
  const target = array[0],
    len = array.length,
    left = [],
    right = [];

  for (let i = 1; i < len; i++) {
    array[i] <= target ? left.push(array[i]) : right.push(array[i]);
  }
  console.log([left, target, right]);
  return quickSort(left).concat([target], quickSort(right));
};

/**
 * 解法一
 * 单独开辟两个存储空间left和right来存储每次递归比target小和大的序列
 * 每次递归直接返回left、target、right拼接后的数组
 *
 * @param {number[]} array
 * @return {number[]}
 */
const quickSort = function (array) {
  if (array.length < 2) return array;

  const index = Math.floor(array.length / 2),
    left = [],
    right = [];

  const target = array.splice(index, 1);

  for (let i = 0; i < array.length; i++) {
    array[i] < target ? left.push(array[i]) : right.push(array[i]);
  }

  console.log([left, target, right]);
  return quickSort(left).concat(target, quickSort(right));
};

/**
 * 解法二
 * 记录一个索引l从数组最左侧开始，记录一个索引r从数组右侧开始
 * 在l<r的条件下，找到右侧小于target的值array[r]，并将其赋值到array[l]
 * 在l<r的条件下，找到左侧大于target的值array[l]，并将其赋值到array[r]
 * 这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置
 * 不需要额外存储空间，写法思路稍复杂（有能力推荐这种写法）
 *
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
const quickSort = function (array, start, end) {
  if (end - start < 1 || end - start > array.length - 1) return;

  const target = array[start];
  let l = start,
    r = end;

  while (l < r) {
    /**查找右侧小于target的值array[r]*/
    while (l < r && array[r] >= target) {
      r--;
    }
    array[l] = array[r];
    /**查找左侧大于target的值array[l]*/
    while (l < r && array[l] < target) {
      l++;
    }
    array[r] = array[l];
  }

  array[l] = target;
  /**递归排序基数左边的数，递归排序基数右边的数，返回数组 */
  quickSort(array, start, l - 1);
  quickSort(array, l + 1, end);
  return array;
};

/**
 * 解法三
 * 1. 通过下标取中间数为基数；
 * 2. 从起点往后寻找比基数大的，记录为下标 i；再从终点往前寻找比基数小的，记录为下标 j，当 i <= j时，原地交换数值；
 * 3. 重复步骤2，直到遍历所有元素，并记录遍历的最后一个下标 i，以此下标为分界线，分为左右两边，分别重复步骤1~3实现递归排序；
 *
 * @param {number[]} array
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
const device = function (array, start, end) {
  if (start >= end) return array;
  let target = Math.floor((start + end) / 2),
    l = start,
    r = end;
  while (l <= r) {
    while (array[target] > array[l]) {
      l++;
    }
    while (array[target] < array[r]) {
      r--;
    }

    if (r >= l) {
      let temp = array[l];
      array[l] = array[r];
      array[r] = temp;
      l++;
      r--;
    }
  }

  return l;
};

const quickSort = function (array, start, end) {
  if (array.length < 1) return array;
  let index = device(array, start, end);
  if (start < index - 1) quickSort(array, start, index - 1);
  if (end > index) quickSort(array, index + 1, end);
  return array;
};

/**Debug */
console.log(
  quickSort(
    [10, 50, 30, 90, 40, 80, 70],
    0,
    [10, 50, 30, 90, 40, 80, 70].length - 1
  )
);
