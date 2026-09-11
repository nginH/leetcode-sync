# 662. Maximum Width of Binary Tree

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 662 |
| Slug | `maximum-width-of-binary-tree` |
| Topics | Tree, Depth-First Search, Breadth-First Search, Binary Tree |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/maximum-width-of-binary-tree/ |

---

## Problem

Given the `root` of a binary tree, return *the **maximum width** of the given tree*.

The **maximum width** of a tree is the maximum **width** among all levels.

The **width** of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is **guaranteed** that the answer will in the range of a **32-bit** signed integer.

 

Example 1:**

**Input:** root = [1,3,2,5,3,null,9]
**Output:** 4
**Explanation:** The maximum width exists in the third level with length 4 (5,3,null,9).

Example 2:**

**Input:** root = [1,3,2,5,null,null,9,6,null,7]
**Output:** 7
**Explanation:** The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).

Example 3:**

**Input:** root = [1,3,2,5]
**Output:** 2
**Explanation:** The maximum width exists in the second level with length 2 (3,2).

 

**Constraints:**

	- The number of nodes in the tree is in the range `[1, 3000]`.

	- `-100 <= Node.val <= 100`

---

## Sample Test Case

```text
[1,3,2,5,3,null,9]
```

## Example Test Cases

```text
[1,3,2,5,3,null,9]
[1,3,2,5,null,null,9,6,null,7]
[1,3,2,5]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [11 — C++](./submissions/003-11.md)
4. [15 — C++](./submissions/004-15.md)

