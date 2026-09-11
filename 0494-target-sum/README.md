# 494. Target Sum

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 494 |
| Slug | `target-sum` |
| Topics | Array, Dynamic Programming, Backtracking, Knapsack Problem, 0-1 Knapsack |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/target-sum/ |

---

## Problem

You are given an integer array `nums` and an integer `target`.

You want to build an **expression** out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.

	- For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `"+2-1"`.

Return the number of different **expressions** that you can build, which evaluates to `target`.

 

Example 1:**

**Input:** nums = [1,1,1,1,1], target = 3
**Output:** 5
**Explanation:** There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

Example 2:**

**Input:** nums = [1], target = 1
**Output:** 1

 

**Constraints:**

	- `1 <= nums.length <= 20`

	- `0 <= nums[i] <= 1000`

	- `0 <= sum(nums[i]) <= 1000`

	- `-1000 <= target <= 1000`

---

## Sample Test Case

```text
[1,1,1,1,1]
3
```

## Example Test Cases

```text
[1,1,1,1,1]
3
[1]
1
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)

