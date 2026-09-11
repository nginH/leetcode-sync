# 98. Validate Binary Search Tree

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 98 |
| Slug | `validate-binary-search-tree` |
| Topics | Tree, Depth-First Search, Binary Search Tree, Binary Tree |
| Total submissions | 6 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/validate-binary-search-tree/ |

---

## Problem

Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.

A **valid BST** is defined as follows:

	- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.

	- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.

	- Both the left and right subtrees must also be binary search trees.

 

Example 1:**

**Input:** root = [2,1,3]
**Output:** true

Example 2:**

**Input:** root = [5,1,4,null,null,3,6]
**Output:** false
**Explanation:** The root node's value is 5 but its right child's value is 4.

 

**Constraints:**

	- The number of nodes in the tree is in the range `[1, 10^4]`.

	- `-2^31 <= Node.val <= 2^31 - 1`

---

## Sample Test Case

```text
[2,1,3]
```

## Example Test Cases

```text
[2,1,3]
[5,1,4,null,null,3,6]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [10 — C++](./submissions/003-10.md)
4. [10 — C++](./submissions/004-10.md)
5. [11 — C++](./submissions/005-11.md)
6. [11 — C++](./submissions/006-11.md)

