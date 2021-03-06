/**
 *  归并排序
 *  url https://www.bilibili.com/video/BV1et411N7Ac?from=search&seid=13153121995390232753
 *
 *  1. 将序列中带排序数字分为若干组，每个数字分为一组
 *  2. 将若干组两两合并，保证合并后的组是有序的
 *  3. 重复第二步操作直到只剩下一组，排序完成
 *
 *
 *  思想
 *  该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
 *
 *  1. 将已有序的子序列合并，得到完全有序的序列
 *  2. 即先使每个子序列有序，再使子序列段间有序
 *  3. 若将两个有序表合并成一个有序表，称为二路归并
 *
 *  分割
 *  1. 将数组从中点进行分割，分为左、右两个数组
 *  2. 递归分割左、右数组，直到数组长度小于2
 *
 *  归并：
 *  1. 如果需要合并，那么左右两数组已经有序了。
 *  2. 创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
 *  3. 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入temp
 *
 */

/**
 * 解法一
 * 分割数组时直接将数组分割为两个数组，合并时直接合并数组。
 * 优点：思路简单，写法简单
 * 缺点：空间复杂度略高，需要复制多个数组
 *
 * @param {number[]} array
 * @return {number[]}
 */
// const mergeSort = function (array) {
//   if (array.length < 2) return array;
//   /**取那个数组的中间数 */
//   const mid = Math.floor(array.length / 2);
//   console.log("mid", mid, array);
//   /**取左边和右边两个数组 */
//   const start = array.slice(0, mid),
//     end = array.slice(mid);

//   return merge(mergeSort(start), mergeSort(end));
// };

/**
 *
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number[]}
 */
// const merge = function (start, end) {
//   const temp = [];

//   while (start.length && end.length) {
//     /**比较左边和右边第一个数 */

//     if (start[0] < end[0]) {
//       temp.push(start.shift());
//     } else {
//       temp.push(end.shift());
//     }
//   }
//   while (start.length) {
//     temp.push(start.shift());
//   }
//   while (end.length) {
//     temp.push(end.shift());
//   }
//   // console.log(temp, "==temp");
//   return temp;
// };

/**
 * 解法二
 * 记录数组的索引，使用left、right两个索引来限定当前分割的数组
 * 优点：空间复杂度低，只需一个temp存储空间，不需要拷贝数组
 * 缺点：写法复杂
 * 
 * 合并
 * @param {number[]} array 目标数组
 * @param {number} l 左边数组起始下标
 * @param {number} r 右边数组结束下标
 * @param {number[]} temp 存储数组
 * @returns {number[]}
 */
const merge = function (array, l, r, temp) {
  /**
   * m 数组中间数
   * l 左边数组索引
   * r 右边数组索引
   * leftSize left数组长度限制
   * rightSize right数组长度限制
   * left left数组
   * right right数组
   */
  // let leftSize = m - l,
  //   rightSize = r - m,
  //   left = [],
  //   right = [];

  /**数组中间数 */
  const m = ~~((l + r) / 2);
  /**
   * 左边left 从l开始到m结束
   * 右边right 从m+1开始到r结束
   * k temp下标
   */
  let left = l,
    right = m + 1,
    k = 0;

  while (left <= m && right <= r) {
    if (array[left] < array[right]) {
      /**
       * 右边数组大于左边数组某个值时， 将左边数组push到temp中
       * left,k递增 继续查询
       */
      temp[k++] = array[left++];
    } else {
      /**
       * 左边数组大于右边数组某个值时， 将右边数组push到temp中
       * right,k递增 继续查询
       */
      temp[k++] = array[right++];
    }
  }

  /**当right的值达到限制， 处理左边的数组 */
  while (left <= m) {
    temp[k++] = array[left++];
  }
  /**当left的值达到限制， 处理右边的数组 */
  while (right <= r) {
    temp[k++] = array[right++];
  }

  k = 0;
  for (let i = l; i <= r; i++) {
    /**将排序好的值赋予array */
    array[i] = temp[k++];
  }

  /**将数组push进left数组 */
  // for (let i = l; i < m; i++) {
  //   left[i - l] = array[i];
  // }

  // /**将数组push进right数组 */
  // for (let j = m; j <= r; j++) {
  //   right[j - m] = array[j];
  // }

  // /**对照左右数组，对左右数组进行排序 */
  // let i = 0,
  //   j = 0,
  //   k = l;
  // while (i < leftSize && j < rightSize) {
  //   if (left[i] > right[j]) {
  //     /**右边的数比左边的数小，将右边的数赋值给数组 */
  //     array[k] = right[j];
  //     j++;
  //   } else {
  //     /**左边的数比右边的数小，将左边的数赋值给数组 */
  //     array[k] = left[i];
  //   }
  //   k++;
  // }

  // /**当j的值达到限制， 处理左边的数组 */
  // while (i < leftSize) {
  //   array[k] = left[i];
  //   i++;
  //   k++;
  // }
  // /**当i的值达到限制， 处理右边的数组 */
  // while (j < rightSize) {
  //   array[k] = right[j];
  //   j++;
  //   k++;
  // }
};

/**分治 */
const mergeSort = function (array, l, r, temp) {
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    mergeSort(array, l, m, temp);
    mergeSort(array, m + 1, r, temp);
    merge(array, l, r, temp);
  }
  return array;
};

const arr = [2, 8, 9, 10, 4, 5, 6, 7, 3];
const l = 0;
const r = arr.length - 1;
console.log(mergeSort(arr, l, r, []));
