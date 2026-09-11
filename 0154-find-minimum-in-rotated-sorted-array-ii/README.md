# 154. Find Minimum in Rotated Sorted Array II

## Metadata

| Field | Value |
|---|---|
| Difficulty | Hard |
| Question ID | 154 |
| Slug | `find-minimum-in-rotated-sorted-array-ii` |
| Topics | Array, Binary Search |
| Total submissions | 6 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/ |

---

## Problem

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,4,4,5,6,7]` might become:

	- `[4,5,6,7,0,1,4]` if it was rotated `4` times.

	- `[0,1,4,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` that may contain **duplicates**, return *the minimum element of this array*.

You must decrease the overall operation steps as much as possible.

 

Example 1:**

**Input:** nums = [1,3,5]
**Output:** 1
Example 2:**

**Input:** nums = [2,2,2,0,1]
**Output:** 0

 

**Constraints:**

	- `n == nums.length`

	- `1 Find Minimum in Rotated Sorted Array, but `nums` may contain **duplicates**. Would this affect the runtime complexity? How and why?

---

## Sample Test Case

```text
[1,3,5]
```

## Example Test Cases

```text
[1,3,5]
[2,2,2,0,1]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [11 — C++](./submissions/003-11.md)
4. [11 — C++](./submissions/004-11.md)
5. [11 — C++](./submissions/005-11.md)
6. [11 — C++](./submissions/006-11.md)

