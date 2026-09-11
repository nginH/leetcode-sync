# 240. Search a 2D Matrix II

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 240 |
| Slug | `search-a-2d-matrix-ii` |
| Topics | Array, Binary Search, Divide and Conquer, Matrix |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/search-a-2d-matrix-ii/ |

---

## Problem

Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:

	- Integers in each row are sorted in ascending from left to right.

	- Integers in each column are sorted in ascending from top to bottom.

 

Example 1:**

**Input:** matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
**Output:** true

Example 2:**

**Input:** matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
**Output:** false

 

**Constraints:**

	- `m == matrix.length`

	- `n == matrix[i].length`

	- `1 <= n, m <= 300`

	- `-10^9 <= matrix[i][j] <= 10^9`

	- All the integers in each row are **sorted** in ascending order.

	- All the integers in each column are **sorted** in ascending order.

	- `-10^9 <= target <= 10^9`

---

## Sample Test Case

```text
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
5
```

## Example Test Cases

```text
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
5
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
20
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [15 — C++](./submissions/003-15.md)
4. [10 — C++](./submissions/004-10.md)

