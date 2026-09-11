# 538. Convert BST to Greater Tree

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 538 |
| Slug | `convert-bst-to-greater-tree` |
| Topics | Tree, Depth-First Search, Binary Search Tree, Binary Tree |
| Total submissions | 1 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/convert-bst-to-greater-tree/ |

---

## Problem

Given the `root` of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a *binary search tree* is a tree that satisfies these constraints:

	- The left subtree of a node contains only nodes with keys **less than** the node's key.

	- The right subtree of a node contains only nodes with keys **greater than** the node's key.

	- Both the left and right subtrees must also be binary search trees.

 

Example 1:**

**Input:** root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
**Output:** [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

Example 2:**

**Input:** root = [0,null,1]
**Output:** [1,null,1]

 

**Constraints:**

	- The number of nodes in the tree is in the range `[0, 10^4]`.

	- `-10^4 https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

---

## Sample Test Case

```text
[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
```

## Example Test Cases

```text
[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
[0,null,1]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)

