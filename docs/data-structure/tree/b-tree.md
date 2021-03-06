---
nav:
  title: 数据结构
  order: 1
group:
  title: 树
  order: 7
title: B 树
order: 10
---

# B 树

B-树就是 B 树，`-` 只是一个符号。

B 树（B-Tree）是一种自平衡的树,它是一种多路搜索树（并不是二叉的），能够保证数据有序。同时它还保证了在查找、插入、删除等操作时性能都能保持在 `O(logn)`，为大块数据的读写操作做了优化,同时它也可以用来描述外部存储（支持对保存在磁盘或者网络上的符号表进行外部查找）

特点：

1. 定义任意非叶子结点最多只有 M 个儿子；且 M>2
2. 根结点的儿子数为[2, M]
3. 除根结点以外的非叶子结点的儿子数为[M/2, M]
4. 每个结点存放至少 M/2-1（取上整）和至多 M-1 个关键字；（至少 2 个关键字）
5. 非叶子结点的关键字个数=指向儿子的指针个数-1
6. 非叶子结点的关键字：K[1], K[2], …, K[M-1]；且 K[i] < K[i+1]
7. 非叶子结点的指针：P[1], P[2], …, P[M]，其中 P[1]指向关键字小于 K[1]的子树，P[M]指向关键字大于 K[M-1]的子树，其它 P[i]指向关键字属于(K[i-1], K[i])的子树
8. 所有叶子结点位于同一层

---

**参考资料：**

- [常用数据结构——树](https://www.jianshu.com/p/912357993486)
- [面试官问你 B 树和 B+树，就把这篇文章丢给他](https://my.oschina.net/u/4116286/blog/3107389)
