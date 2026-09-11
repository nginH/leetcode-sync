# 222. Count Complete Tree Nodes

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 222 |
| Slug | `count-complete-tree-nodes` |
| Topics | Binary Search, Bit Manipulation, Tree, Binary Tree |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/count-complete-tree-nodes/ |

---

## Problem

Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

According to **Wikipedia**, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and `2^h` nodes inclusive at the last level `h`.

Design an algorithm that runs in less than O(n)` time complexity.

 

Example 1:**

**Input:** root = [1,2,3,4,5,6]
**Output:** 6

Example 2:**

**Input:** root = []
**Output:** 0

Example 3:**

**Input:** root = [1]
**Output:** 1

 

**Constraints:**

	- The number of nodes in the tree is in the range `[0, 5 * 10^4]`.

	- `0 <= Node.val <= 5 * 10^4`

	- The tree is guaranteed to be **complete**.

---

## Sample Test Case

```text
[1,2,3,4,5,6]
```

## Example Test Cases

```text
[1,2,3,4,5,6]
[]
[1]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)
4. [20 — C++](./submissions/004-20.md)

