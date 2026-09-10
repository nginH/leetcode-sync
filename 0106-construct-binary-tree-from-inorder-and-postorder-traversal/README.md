# 106. Construct Binary Tree from Inorder and Postorder Traversal

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 106 |
| Slug | `construct-binary-tree-from-inorder-and-postorder-traversal` |
| Topics | Array, Hash Table, Divide and Conquer, Tree, Binary Tree |
| Total submissions | 1 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/ |

---

## Problem

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.

 

Example 1:**

**Input:** inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
**Output:** [3,9,20,null,null,15,7]

Example 2:**

**Input:** inorder = [-1], postorder = [-1]
**Output:** [-1]

 

**Constraints:**

	- `1 <= inorder.length <= 3000`

	- `postorder.length == inorder.length`

	- `-3000 <= inorder[i], postorder[i] <= 3000`

	- `inorder` and `postorder` consist of **unique** values.

	- Each value of `postorder` also appears in `inorder`.

	- `inorder` is **guaranteed** to be the inorder traversal of the tree.

	- `postorder` is **guaranteed** to be the postorder traversal of the tree.

---

## Sample Test Case

```text
[9,3,15,20,7]
[9,15,7,20,3]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)

