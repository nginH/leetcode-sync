# 938. Range Sum of BST

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 975 |
| Slug | `range-sum-of-bst` |
| Topics | Tree, Depth-First Search, Binary Search Tree, Binary Tree |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/range-sum-of-bst/ |

---

## Problem

Given the `root` node of a binary search tree and two integers `low` and `high`, return *the sum of values of all nodes with a value in the **inclusive** range *`[low, high]`.

 

Example 1:**

**Input:** root = [10,5,15,3,7,null,18], low = 7, high = 15
**Output:** 32
**Explanation:** Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:**

**Input:** root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
**Output:** 23
**Explanation:** Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

 

**Constraints:**

	- The number of nodes in the tree is in the range `[1, 2 * 10^4]`.

	- `1 <= Node.val <= 10^5`

	- `1 <= low <= high <= 10^5`

	- All `Node.val` are **unique**.

---

## Sample Test Case

```text
[10,5,15,3,7,null,18]
7
15
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [10 — C++](./submissions/003-10.md)

