# 907. Sum of Subarray Minimums

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 943 |
| Slug | `sum-of-subarray-minimums` |
| Topics | Array, Dynamic Programming, Stack, Monotonic Stack |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/sum-of-subarray-minimums/ |

---

## Problem

Given an array of integers arr, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer **modulo** `10^9 + 7`.

 

Example 1:**

**Input:** arr = [3,1,2,4]
**Output:** 17
**Explanation:** 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:**

**Input:** arr = [11,81,94,43,3]
**Output:** 444

 

**Constraints:**

	- `1 <= arr.length <= 3 * 10^4`

	- `1 <= arr[i] <= 3 * 10^4`

---

## Sample Test Case

```text
[3,1,2,4]
```

## Example Test Cases

```text
[3,1,2,4]
[50]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

