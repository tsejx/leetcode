---
nav:
  title: LeetCode
  order: 3
group:
  title: 数组
  order: 1
title: 35 - 搜索插入位置
order: 35
---

# 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1：

```plain
输入: [1,3,5,6], 5
输出: 2
```

示例 2：

```plain
输入: [1,3,5,6], 2
输出: 1
```

示例 3：

```plain
输入: [1,3,5,6], 7
输出: 4
```

示例 4：

```plain
输入: [1,3,5,6], 0
输出: 0
```

## 解题思路

### 暴力法

```js
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
```

#### 复杂度分析

- 时间复杂度：`O(n)`
- 空间复杂度：`O()`

### 二分查找

- **通常写二分法是奔着目标元素写的**

通常教科书上给出的二分查找代码，循环部分给出的条件是 `while (left <= right)` ，表示当 `left == right` 成立的时候，还有一个元素，即索引 `left`（`right`）位置的元素还没有看到，需要继续查看这个元素的值，看看是不是我们想要的。

这个思路把待查找数组分为了 3 个部分：`mid` 所在位置，`mid` 的左边，`mid` 的右边，根据 `mid` 元素与目标元素的值的大小关系，如果 `nums[mid]` 恰好等于 `target` 直接返回就好了，否则根据不等关系，确定下一轮搜索的区间在哪里。

「力扣」上有些二分题用这种思路做，有的时候往往会顺带思考很多问题，增加了出错率：例如

1. 返回 `left` 还是 `right`；
2. 明明已经看到了等于 `target` 的元素，但是题目要求返回小于等于 `target` 的第 1 个元素的位置，或则要求返回大于等于 `target` 的最后 1 个元素的位置的时候，一不小心会把代码写成线性查找。

这两个问题有时会增加思考问题的负担，一不小心还有可能出错。这一类问题的共同特点是：目标值往往在待查找数组中存在多个，但是题目要求我们返回的是一个边界值。

- **不妨从哪些元素一定不是目标元素考虑**

做对这一类问题的思路是 `排除法`，在本题解最开始其实已经介绍了，我们的思路是做排除法：具体是根据看到的 `mid` 位置的元素，排除掉不可能存在目标元素的区间，而下一轮在可能存在目标的子区间里查找。

具体做法是：

1. 先把循环可以继续的条件写成 `while (left < right)`。

在循环的过程中 left 不断右移，right 不断左移。从形式上看，退出循环的时候一定有 `left == right` 成立。此时要注意：left （right） 这个位置的值可能程序还没有读取到，因此“有可能”需要再对 left（right） 这个位置的值是否是目标元素的值做一次判断。

2. 写 `if` 和 `else` 语句的时候，思考当 `nums[mid]` 满足什么性质的时候，`mid` 不是解，进而接着判断 `mid` 的左边有没有可能是解，`mid` 的右边有没有可能是解。

说明：（1）做题的经验告诉我，「思考什么时候不是解」比较好想。生活中其实也是这样，我往往说不大清楚我想要什么，但是我很确定我不想要什么；

之所以先考虑「什么时候不是解」，是因为做了很多题以后发现，这样考虑不容易出错。在 `if` 语句写对的情况下（建议把下一轮搜索的区间写下来，写在注释里，这样边界怎么设置就很清楚了，不容易乱）。`else` 的情况就不用思考了，肯定是 `if` 的反面。 然后我们注意一下 `mid` 是否需要上取整的问题，最后看看是否需要打个补丁判断一下 `left` 这个位置是不是我们要找的。这个算法就写完了。

（2）此时 `mid` 作为待查找数组的分界，就把它分为两个区间：一个部分可能存在目标元素，一个部分一定不存在目标元素。

根据 `mid` 被分到左边区间还是右边区间，代码写出来只有以下 2 种（重难点）：

**边界收缩行为 1**： `mid` 被分到左边。即区间被分成 `[left, mid]` 与 `[mid + 1, right]`，这里用“闭区间”表示区间端点可以取到，下同；

代码写出来是这样的：

```js
if (check(mid)) {
  // 下一轮搜索区间是 [mid + 1, right]，因此把左边界设置到 mid + 1 位置
  left = mid + 1;
} else {
  // 上面对了以后，不加思考，剩下的区间一定是 [left, mid]，因此左边界向右收缩到 mid 位置
  right = mid;
}
```

说明：这里的 `check(mid)` 函数通常是一个表达式（例如上面的“参考代码 1”），在一些情况下有可能逻辑比较复杂，建议专门抽取成一个私有方法，以突显主干逻辑。

**边界收缩行为 2**： mid 被分到右边。即区间被分成 [left, mid - 1] 与 [mid, right]；

同上，代码写出来是这样的（由于注释是对称的，这里省略，留给读者填充）：

```js
if (check(mid)) {
  right = mid - 1;
} else {
  left = mid;
}
```

3. 根据「边界收缩行为」修改取中间数的行为（重难点）

先说一下中间数的取法。一般是这样的：

```js
const mid = (left + right) / 2;
```

这种写法在绝大多数情况下没问题，但是在 `left` 和 `right` 特别大的场景中，`left + right` 会发生整形溢出，得到一个负数，`mid` 的值随之也是负数。改进的写法是：

```js
const mid = left + (right - left) / 2;
```

这两种写法事实上没有本质的区别，在 `left` 和 `right` 都表示数组索引的时候，几乎不会越界，因为绝大多数情况下不会开那么长的数组。

这里有一个细节，/ 是整除，它的行为是 `向下取整`，造成了 `const mid = (left + right) / 2` 这种写法 `mid` 永远取不到带搜索区间里最右边的位置（读者可以举一个只有 2 个元素的子数组，理解这句话）。

面对上面的 `边界收缩行为 2`（`mid` 被分到右边），在待搜索区间收缩到只剩下 2 个元素的时候，就有可能（请读者在练习的过程中体会这里我的描述为什么是 **有可能** 而不是 **一定**）造成死循环。

```js
var searchInsert = function(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Match.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
```
