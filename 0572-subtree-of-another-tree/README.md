# 572. Subtree of Another Tree

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 572 |
| Slug | `subtree-of-another-tree` |
| Topics | Tree, Depth-First Search, String Matching, Binary Tree, Hash Function |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/subtree-of-another-tree/ |

---

## Problem

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of` subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

 

Example 1:**

**Input:** root = [3,4,5,1,2], subRoot = [4,1,2]
**Output:** true

Example 2:**

**Input:** root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
**Output:** false

 

**Constraints:**

	- The number of nodes in the `root` tree is in the range `[1, 2000]`.

	- The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.

	- `-10^4 <= root.val <= 10^4`

	- `-10^4 <= subRoot.val <= 10^4`

---

## Sample Test Case

```text
[3,4,5,1,2]
[4,1,2]
```

## Hints

1. Which approach is better here- recursive or iterative?
2. If recursive approach is better, can you write recursive function with its parameters?
3. Two trees <b>s</b> and <b>t</b> are said to be identical if their root values are same and their left and right subtrees are identical. Can you write this in form of recursive formulae?
4. Recursive formulae can be: 
isIdentical(s,t)= s.val==t.val AND isIdentical(s.left,t.left) AND isIdentical(s.right,t.right)

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [11 — C++](./submissions/003-11.md)

