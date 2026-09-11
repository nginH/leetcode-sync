# 74. Search a 2D Matrix

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 74 |
| Slug | `search-a-2d-matrix` |
| Topics | Array, Binary Search, Matrix |
| Total submissions | 7 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/search-a-2d-matrix/ |

---

## Problem

You are given an `m x n` integer matrix `matrix` with the following two properties:

	- Each row is sorted in non-decreasing order.

	- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` *if* `target` *is in* `matrix` *or* `false` *otherwise*.

You must write a solution in `O(log(m * n))` time complexity.

 

Example 1:**

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
**Output:** true

Example 2:**

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
**Output:** false

 

**Constraints:**

	- `m == matrix.length`

	- `n == matrix[i].length`

	- `1 <= m, n <= 100`

	- `-10^4 <= matrix[i][j], target <= 10^4`

---

## Sample Test Case

```text
[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
3
```

## Example Test Cases

```text
[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
3
[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
13
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [15 — C++](./submissions/002-15.md)
3. [10 — C++](./submissions/003-10.md)
4. [10 — C++](./submissions/004-10.md)
5. [11 — C++](./submissions/005-11.md)
6. [11 — C++](./submissions/006-11.md)
7. [11 — C++](./submissions/007-11.md)

