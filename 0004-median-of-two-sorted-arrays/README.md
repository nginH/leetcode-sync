# 4. Median of Two Sorted Arrays

## Metadata

| Field | Value |
|---|---|
| Difficulty | Hard |
| Question ID | 4 |
| Slug | `median-of-two-sorted-arrays` |
| Topics | Array, Binary Search, Divide and Conquer |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/median-of-two-sorted-arrays/ |

---

## Problem

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

 

Example 1:**

**Input:** nums1 = [1,3], nums2 = [2]
**Output:** 2.00000
**Explanation:** merged array = [1,2,3] and median is 2.

Example 2:**

**Input:** nums1 = [1,2], nums2 = [3,4]
**Output:** 2.50000
**Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 

**Constraints:**

	- `nums1.length == m`

	- `nums2.length == n`

	- `0 <= m <= 1000`

	- `0 <= n <= 1000`

	- `1 <= m + n <= 2000`

	- `-10^6 <= nums1[i], nums2[i] <= 10^6`

---

## Sample Test Case

```text
[1,3]
[2]
```

## Example Test Cases

```text
[1,3]
[2]
[1,2]
[3,4]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


