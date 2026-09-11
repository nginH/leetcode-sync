# 105. Construct Binary Tree from Preorder and Inorder Traversal

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 105 |
| Slug | `construct-binary-tree-from-preorder-and-inorder-traversal` |
| Topics | Array, Hash Table, Divide and Conquer, Tree, Binary Tree |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ |

---

## Problem

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.

 

Example 1:**

**Input:** preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
**Output:** [3,9,20,null,null,15,7]

Example 2:**

**Input:** preorder = [-1], inorder = [-1]
**Output:** [-1]

 

**Constraints:**

	- `1 <= preorder.length <= 3000`

	- `inorder.length == preorder.length`

	- `-3000 <= preorder[i], inorder[i] <= 3000`

	- `preorder` and `inorder` consist of **unique** values.

	- Each value of `inorder` also appears in `preorder`.

	- `preorder` is **guaranteed** to be the preorder traversal of the tree.

	- `inorder` is **guaranteed** to be the inorder traversal of the tree.

---

## Sample Test Case

```text
[3,9,20,15,7]
[9,3,15,20,7]
```

## Example Test Cases

```text
[3,9,20,15,7]
[9,3,15,20,7]
[-1]
[-1]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

