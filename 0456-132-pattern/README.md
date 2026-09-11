# 456. 132 Pattern

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 456 |
| Slug | `132-pattern` |
| Topics | Array, Binary Search, Stack, Monotonic Stack, Ordered Set |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/132-pattern/ |

---

## Problem

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i Example 1:**

**Input:** nums = [1,2,3,4]
**Output:** false
**Explanation:** There is no 132 pattern in the sequence.

Example 2:**

**Input:** nums = [3,1,4,2]
**Output:** true
**Explanation:** There is a 132 pattern in the sequence: [1, 4, 2].

Example 3:**

**Input:** nums = [-1,3,2,0]
**Output:** true
**Explanation:** There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

 

**Constraints:**

	- `n == nums.length`

	- `1 <= n <= 2 * 10^5`

	- `-10^9 <= nums[i] <= 10^9`

---

## Sample Test Case

```text
[1,2,3,4]
```

## Example Test Cases

```text
[1,2,3,4]
[3,1,4,2]
[-1,3,2,0]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

