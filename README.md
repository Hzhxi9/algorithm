# 努力到底是为了什么

### Link

1.  [LeetCode Docs](https://doocs.github.io/leetcode/#/solution/0000-0099/0001.Two%20Sum/README)
2.  [前端该如何准备数据结构和算法？](https://juejin.cn/post/6844903919722692621)
3.  [写给前端的算法进阶指南，我是如何两个月零基础刷 200 题](https://juejin.cn/post/6847009772500156429#heading-5)
4.  [写给零基础的前端算法入门指南](https://juejin.cn/post/6929755669683765261#heading-34)
5.  [数据结构与算法](https://doocs.github.io/data-structure-and-algorithm/#/?id=%e5%bf%85%e7%9f%a5%e5%bf%85%e4%bc%9a%ef%bc%9a%e6%95%b0%e6%8d%ae%e7%bb%93%e6%9e%84%e4%b8%8e%e7%ae%97%e6%b3%95)
6.  [用 JavaScript 实现的算法和数据结构](http://www.conardli.top/docs/)
7.  [javascript 数据解构与算法](https://www.bilibili.com/video/BV19E411M78q)
8.  [十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/articles/7674659.html)
9.  [快速排序（Quicksort）的 Javascript 实现](http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html)

### DataStructure 数据结构

1.  数组

    - 概述

      数组是我们在开发中最常见到的数据结构了，用于按顺序存储元素的集合。但是元素可以随机存取，因为数组中的每个元素都可以通过数组索引来识别。插入和删除时要移动后续元素，还要考虑扩容问题，插入慢。
      数组与日常的业务开发联系非常紧密，如何巧妙的用好数组是我们能否开发出高质量代码的关键

    - 双指针

      - 整数组顺序使奇数位于偶数前面

      - 把数组排成最小的数
      - 和为 S 的连续正整数序列
      - 和为 S 的两个数字

    - N 数之和

      - 三数之和

    - 二维数组

      - 构建乘积数组
      - 顺时针打印矩阵

    - 数据统计
      - 数组中出现次数超过数组长度一半的数字
      - 第一个只出现一次的字符
      - 连续子数组的最大和
      - 扑克牌顺子

2.  字符串
3.  链表
4.  栈和队列
5.  堆
6.  哈希表

### Algorithm 算法

1. 排序
   - 快速排序
     - 选择一个目标值，比目标值小的放左边，比目标值大的放右边，目标值的位置已排好，将左右两侧再进行快排。
   - 归并排序
     - 将大序列二分成小序列，将小序列排序后再将排序后的小序列归并成大序列。
   - 选择排序
     - 每次排序取一个最大或最小的数字放到前面的有序序列中。
   - 插入排序
     - 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
   - 冒泡排序
     - 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。下一次循环继续上面的操作，不循环已经排序好的数。
   - 堆排序
     - 创建一个大顶堆，大顶堆的堆顶一定是最大的元素。交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。从后往前以此和第一个元素交换并重新构建，排序完成。
   - 桶排序
     - 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
     - 桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。
   - 希尔排序
     - 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序
   - 基数排序
     - 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。
   - 计数排序
     - 计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
2. 分治
3. 数学运算
4. 查找
5. DFS 和 BFS
6. 递归和循环
7. 回溯算法
8. 动态规划
9. 贪心算法

### LeetCode

1. day01 两数之和 `TwoSum`
2. day01 两数相加 `AddTwoNumbers`
3. day01 无重复字符的最长子串 `LengthOfLongestSubstring`
4. day02 寻找两个正序数组的中位数 `FindMedianSortedArrays`
5. day02 最长回文子串 `LongestPalindrome`
