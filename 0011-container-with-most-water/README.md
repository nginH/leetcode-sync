# 11. Container With Most Water

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 11 |
| Slug | `container-with-most-water` |
| Topics | Array, Two Pointers, Greedy |
| Total submissions | 6 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/container-with-most-water/ |

---

## Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i^th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

**Notice** that you may not slant the container.

 

Example 1:**

**Input:** height = [1,8,6,2,5,4,8,3,7]
**Output:** 49
**Explanation:** The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:**

**Input:** height = [1,1]
**Output:** 1

 

**Constraints:**

	- `n == height.length`

	- `2 <= n <= 10^5`

	- `0 <= height[i] <= 10^4`

---

## Sample Test Case

```text
[1,8,6,2,5,4,8,3,7]
```

## Hints

1. If you simulate the problem, it will be O(n^2) which is not efficient.
2. Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.
3. How can you calculate the amount of water at each step?

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [14 — C++](./submissions/003-14.md)
4. [10 — C++](./submissions/004-10.md)
5. [14 — C++](./submissions/005-14.md)
6. [11 — C++](./submissions/006-11.md)

