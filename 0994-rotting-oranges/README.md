# 994. Rotting Oranges

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 1036 |
| Slug | `rotting-oranges` |
| Topics | Array, Breadth-First Search, Matrix |
| Total submissions | 7 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/rotting-oranges/ |

---

## Problem

You are given an `m x n` `grid` where each cell can have one of three values:

	- `0` representing an empty cell,

	- `1` representing a fresh orange, or

	- `2` representing a rotten orange.

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return *the minimum number of minutes that must elapse until no cell has a fresh orange*. If *this is impossible, return* `-1`.

 

Example 1:**

**Input:** grid = [[2,1,1],[1,1,0],[0,1,1]]
**Output:** 4

Example 2:**

**Input:** grid = [[2,1,1],[0,1,1],[1,0,1]]
**Output:** -1
**Explanation:** The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:**

**Input:** grid = [[0,2]]
**Output:** 0
**Explanation:** Since there are already no fresh oranges at minute 0, the answer is just 0.

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m, n <= 10`

	- `grid[i][j]` is `0`, `1`, or `2`.

---

## Sample Test Case

```text
[[2,1,1],[1,1,0],[0,1,1]]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [10 — C++](./submissions/003-10.md)
4. [11 — C++](./submissions/004-11.md)
5. [11 — C++](./submissions/005-11.md)
6. [10 — C++](./submissions/006-10.md)
7. [20 — C++](./submissions/007-20.md)

