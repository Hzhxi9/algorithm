/**
 *  堆排序
 *  url https://haokan.baidu.com/v?vid=6453506298541894545&pd=bjh&fr=bjhauthor&type=video
 *
 *  堆
 *  1. 完全二叉树
 *  2. 父节点要大于子节点
 *  3. 父节点公式 Math.floor((i - 1) / 2)  左子节点 2i + 1 右子节点 2i + 2
 *
 *  思想
 *  创建一个大顶堆，大顶堆的堆顶一定是最大的元素。
 *  交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。
 *  从后往前以此和第一个元素交换并重新构建，排序完成
 *
 */

/**实现一 */

// /**
//  * 交换函数
//  * @param {number[]} tree
//  * @param {number} max
//  * @param {number} i
//  */
// const swap = function (tree, max, i) {
//   let temp = tree[max];
//   tree[max] = tree[i];
//   tree[i] = temp;
// };

// /**
//  * 单个堆结构处理
//  * @param {number[]} tree
//  * @param {number} n
//  * @param {number} i
//  * @returns {number[]}
//  */
// const heapify = function (tree, n, i) {
//   /**递归出口 */
//   if (i >= n) return;

//   /**左右子节点,最大数 */
//   let c1 = 2 * i + 1,
//     c2 = 2 * i + 2,
//     max = i;

//   /**比较左右节点,获取最大值 */
//   if (c1 < n && tree[c1] > tree[max]) max = c1;
//   if (c2 < n && tree[c2] > tree[max]) max = c2;

//   if (max !== i) {
//     /**max发生改变 调用swap函数 */
//     swap(tree, max, i);
//     /**递归处理 */
//     heapify(tree, n, max);
//   }

//   return tree;
// };

// /**
//  * 返回整个堆结构
//  * @param {number[]} tree
//  * @param {number} n
//  * @returns
//  */
// const buildHeap = function (tree, n) {
//   /**最后一个父节点 */
//   const lastNode = n - 1,
//     parent = (lastNode - 1) / 2;

//   for (let i = parent; i >= 0; i--) {
//     heapify(tree, n, i);
//   }

//   return tree;
// };

// /**
//  * @param {number[]} nums
//  * @returns {number[]}
//  */
// const heapSort = function (nums) {
//   let n = nums.length;
//   /**建立一个堆 */
//   const tree = buildHeap(nums, n);

//   for (let i = n - 1; i >= 0; i--) {
//     /**交换第一个节点和最后一个节点 */
//     swap(tree, i, 0);
//     /**排除最后一个节点 */
//     heapify(tree, i, 0);
//   }

//   return tree;
// };

// /**实现二 */

/**构建大顶堆，从第一个非叶子节点开始，进行下沉操作 */
const createHeap = function (array) {
  const len = array.length,
    start = parseInt(len / 2) - 1;
  for (let i = start; i >= 0; i--) {
    adjust(array, i, len);
  }
};

/**将第target个元素进行下沉，孩子节点有比他的的就下沉 */
const adjust = function (array, target, len) {
  for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
    /**找到孩子节点中最大的 */
    if (i + 1 < len && array[i + 1] > array[i]) {
      i = i + 1;
    }
    /**下沉 */
    if (array[i] > array[target]) {
      [array[i], array[target]] = [array[target], array[i]];
      target = i;
    } else {
      break;
    }
  }
};

const heapSort = function (array) {
  createHeap(array);
  /**交换第一个元素和最后一个元素，然后重新调整大顶堆 */
  for (let i = array.length - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]];
    adjust(array, 0, i);
  }
  return array;
};

console.log(heapSort([10, 50, 30, 90, 40, 80, 70]));
