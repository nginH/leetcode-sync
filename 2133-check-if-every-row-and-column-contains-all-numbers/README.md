# 2133. Check if Every Row and Column Contains All Numbers

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 2254 |
| Slug | `check-if-every-row-and-column-contains-all-numbers` |
| Topics | Array, Hash Table, Matrix |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/ |

---

## Problem

An `n x n` matrix is **valid** if every row and every column contains **all** the integers from `1` to `n` (**inclusive**).

Given an `n x n` integer matrix `matrix`, return `true` *if the matrix is **valid**.* Otherwise, return `false`.

 

Example 1:**

**Input:** matrix = [[1,2,3],[3,1,2],[2,3,1]]
**Output:** true
**Explanation:** In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.

Example 2:**

**Input:** matrix = [[1,1,1],[1,2,3],[1,2,3]]
**Output:** false
**Explanation:** In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.

 

**Constraints:**

	- `n == matrix.length == matrix[i].length`

	- `1 <= n <= 100`

	- `1 <= matrix[i][j] <= n`

---

## Sample Test Case

```text
[[1,2,3],[3,1,2],[2,3,1]]
```

## Example Test Cases

```text
[[1,2,3],[3,1,2],[2,3,1]]
[[1,1,1],[1,2,3],[1,2,3]]
```

## Hints

1. Use for loops to check each row for every number from 1 to n. Similarly, do the same for each column.
2. For each check, you can keep a set of the unique elements in the checked row/col. By the end of the check, the size of the set should be n.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)

