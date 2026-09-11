# 559. Maximum Depth of N-ary Tree

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 774 |
| Slug | `maximum-depth-of-n-ary-tree` |
| Topics | Tree, Depth-First Search, Breadth-First Search |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/maximum-depth-of-n-ary-tree/ |

---

## Problem

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).*

 

Example 1:**

**Input:** root = [1,null,3,2,4,null,5,6]
**Output:** 3

Example 2:**

**Input:** root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
**Output:** 5

 

**Constraints:**

	- The total number of nodes is in the range `[0, 10^4]`.

	- The depth of the n-ary tree is less than or equal to `1000`.

---

## Sample Test Case

```text
[1,null,3,2,4,null,5,6]
```

## Example Test Cases

```text
[1,null,3,2,4,null,5,6]
[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)

