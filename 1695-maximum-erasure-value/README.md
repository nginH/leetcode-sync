# 1695. Maximum Erasure Value

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 1813 |
| Slug | `maximum-erasure-value` |
| Topics | Array, Hash Table, Sliding Window |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/maximum-erasure-value/ |

---

## Problem

You are given an array of positive integers `nums` and want to erase a subarray containing **unique elements**. The **score** you get by erasing the subarray is equal to the **sum** of its elements.

Return *the **maximum score** you can get by erasing **exactly one** subarray.*

An array `b` is called to be a subarray of `a` if it forms a contiguous subsequence of `a`, that is, if it is equal to `a[l],a[l+1],...,a[r]` for some `(l,r)`.

 

Example 1:**

**Input:** nums = [4,2,4,5,6]
**Output:** 17
**Explanation:** The optimal subarray here is [2,4,5,6].

Example 2:**

**Input:** nums = [5,2,1,2,5,2,1,2,5]
**Output:** 8
**Explanation:** The optimal subarray here is [5,2,1] or [1,2,5].

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `1 <= nums[i] <= 10^4`

---

## Sample Test Case

```text
[4,2,4,5,6]
```

## Hints

1. The main point here is for the subarray to contain unique elements for each index. Only the first subarrays starting from that index have unique elements.
2. This can be solved using the two pointers technique

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

