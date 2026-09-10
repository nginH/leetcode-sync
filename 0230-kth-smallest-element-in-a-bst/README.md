# 230. Kth Smallest Element in a BST

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 230 |
| Slug | `kth-smallest-element-in-a-bst` |
| Topics | Tree, Depth-First Search, Binary Search Tree, Binary Tree |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/kth-smallest-element-in-a-bst/ |

---

## Problem

Given the `root` of a binary search tree, and an integer `k`, return *the* `k^th` *smallest value (**1-indexed**) of all the values of the nodes in the tree*.

 

Example 1:**

**Input:** root = [3,1,4,null,2], k = 1
**Output:** 1

Example 2:**

**Input:** root = [5,3,6,2,4,null,null,1], k = 3
**Output:** 3

 

**Constraints:**

	- The number of nodes in the tree is `n`.

	- `1 <= k <= n <= 10^4`

	- `0 <= Node.val <= 10^4`

 

**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

---

## Sample Test Case

```text
[3,1,4,null,2]
1
```

## Hints

1. Try to utilize the property of a BST.
2. Try in-order traversal. (Credits to @chan13)
3. What if you could modify the BST node's structure?
4. The optimal runtime complexity is O(height of BST).

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)
4. [10 — C++](./submissions/004-10.md)

