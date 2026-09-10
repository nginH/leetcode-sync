# 162. Find Peak Element

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 162 |
| Slug | `find-peak-element` |
| Topics | Array, Binary Search |
| Total submissions | 9 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/find-peak-element/ |

---

## Problem

A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.

You may imagine that `nums[-1] = nums[n] = -&infin;`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in `O(log n)` time.

 

Example 1:**

**Input:** nums = [1,2,3,1]
**Output:** 2
**Explanation:** 3 is a peak element and your function should return the index number 2.

Example 2:**

**Input:** nums = [1,2,1,3,5,6,4]
**Output:** 5
**Explanation:** Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

 

**Constraints:**

	- `1 <= nums.length <= 1000`

	- `-2^31 <= nums[i] <= 2^31 - 1`

	- `nums[i] != nums[i + 1]` for all valid `i`.

---

## Sample Test Case

```text
[1,2,3,1]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [15 — C++](./submissions/003-15.md)
4. [15 — C++](./submissions/004-15.md)
5. [10 — C++](./submissions/005-10.md)
6. [11 — C++](./submissions/006-11.md)
7. [11 — C++](./submissions/007-11.md)
8. [14 — C++](./submissions/008-14.md)
9. [14 — C++](./submissions/009-14.md)

