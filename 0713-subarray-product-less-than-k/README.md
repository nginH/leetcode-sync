# 713. Subarray Product Less Than K

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 713 |
| Slug | `subarray-product-less-than-k` |
| Topics | Array, Binary Search, Sliding Window, Prefix Sum |
| Total submissions | 8 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/subarray-product-less-than-k/ |

---

## Problem

You are given an array of integers `nums` and an integer `k`.

Return the number of contiguous subarrays where the **product** of all the elements in the **subarray** is **strictly less** than `k`.

 

Example 1:**

**Input:** nums = [10,5,2,6], k = 100
**Output:** 8
**Explanation:** The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:**

**Input:** nums = [1,2,3], k = 0
**Output:** 0

 

**Constraints:**

	- `1 <= nums.length <= 3 * 10^4`

	- `1 <= nums[i] <= 1000`

	- `0 <= k <= 10^6`

---

## Sample Test Case

```text
[686, 28, 455, 675, 605, 29, 942, 48, 502, 889, 854, 206, 231, 796, 272, 565, 887, 969, 558, 13, 22, 455, 145, 804, 15]
515854
```

## Hints

1. For each j, let opt(j) be the smallest i so that nums[i] * nums[i+1] * ... * nums[j] is less than k.  opt is an increasing function.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [11 — C++](./submissions/003-11.md)
4. [10 — C++](./submissions/004-10.md)
5. [10 — C++](./submissions/005-10.md)
6. [10 — C++](./submissions/006-10.md)
7. [10 — C++](./submissions/007-10.md)
8. [10 — C++](./submissions/008-10.md)

