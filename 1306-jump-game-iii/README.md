# 1306. Jump Game III

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 1428 |
| Slug | `jump-game-iii` |
| Topics | Array, Depth-First Search, Breadth-First Search |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/jump-game-iii/ |

---

## Problem

Given an array of non-negative integers `arr`, you are initially positioned at `start` index of the array. When you are at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`, check if you can reach **any** index with value 0.

Notice that you can not jump outside of the array at any time.

 

Example 1:**

**Input:** arr = [4,2,3,0,3,1,2], start = 5
**Output:** true
**Explanation:** 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 

Example 2:**

**Input:** arr = [4,2,3,0,3,1,2], start = 0
**Output:** true 
**Explanation: 
**One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3

Example 3:**

**Input:** arr = [3,0,2,1,2], start = 2
**Output:** false
**Explanation: **There is no way to reach at index 1 with value 0.

 

**Constraints:**

	- `1 <= arr.length <= 5 * 10^4`

	- `0 <= arr[i] < arr.length`

	- `0 <= start < arr.length`

---

## Sample Test Case

```text
[4,2,3,0,3,1,2]
5
```

## Hints

1. Think of BFS to solve the problem.
2. When you reach a position with a value = 0 then return true.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [15 — C++](./submissions/002-15.md)
3. [15 — C++](./submissions/003-15.md)
4. [10 — C++](./submissions/004-10.md)

