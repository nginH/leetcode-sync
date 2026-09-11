# 704. Binary Search

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 792 |
| Slug | `binary-search` |
| Topics | Array, Binary Search |
| Total submissions | 5 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/binary-search/ |

---

## Problem

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

 

Example 1:**

**Input:** nums = [-1,0,3,5,9,12], target = 9
**Output:** 4
**Explanation:** 9 exists in nums and its index is 4

Example 2:**

**Input:** nums = [-1,0,3,5,9,12], target = 2
**Output:** -1
**Explanation:** 2 does not exist in nums so return -1

 

**Constraints:**

	- `1 <= nums.length <= 10^4`

	- `-10^4 < nums[i], target < 10^4`

	- All the integers in `nums` are **unique**.

	- `nums` is sorted in ascending order.

---

## Sample Test Case

```text
[-1,0,3,5,9,12]
9
```

## Example Test Cases

```text
[-1,0,3,5,9,12]
9
[-1,0,3,5,9,12]
2
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [11 — C++](./submissions/003-11.md)
4. [15 — C++](./submissions/004-15.md)
5. [10 — C++](./submissions/005-10.md)

