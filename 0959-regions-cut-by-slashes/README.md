# 959. Regions Cut By Slashes

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 999 |
| Slug | `regions-cut-by-slashes` |
| Topics | Array, Hash Table, Depth-First Search, Breadth-First Search, Union-Find, Matrix, Planar Graph |
| Total submissions | 1 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/regions-cut-by-slashes/ |

---

## Problem

An `n x n` grid is composed of `1 x 1` squares where each `1 x 1` square consists of a `'/'`, `'\'`, or blank space `' '`. These characters divide the square into contiguous regions.

Given the grid `grid` represented as a string array, return *the number of regions*.

Note that backslash characters are escaped, so a `'\'` is represented as `'\\'`.

 

Example 1:**

**Input:** grid = [" /","/ "]
**Output:** 2

Example 2:**

**Input:** grid = [" /","  "]
**Output:** 1

Example 3:**

**Input:** grid = ["/\\","\\/"]
**Output:** 5
**Explanation: **Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.

 

**Constraints:**

	- `n == grid.length == grid[i].length`

	- `1 <= n <= 30`

	- `grid[i][j]` is either `'/'`, `'\'`, or `' '`.

---

## Sample Test Case

```text
[" /","/ "]
```

## Example Test Cases

```text
[" /","/ "]
[" /","  "]
["/\\","\\/"]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)

