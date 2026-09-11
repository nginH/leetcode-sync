# 33. Search in Rotated Sorted Array

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 33 |
| Slug | `search-in-rotated-sorted-array` |
| Topics | Array, Binary Search |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/search-in-rotated-sorted-array/ |

---

## Problem

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly left rotated** at an unknown index `k` (`1 Example 1:**

**Input:** nums = [4,5,6,7,0,1,2], target = 0
**Output:** 4
Example 2:**

**Input:** nums = [4,5,6,7,0,1,2], target = 3
**Output:** -1
Example 3:**

**Input:** nums = [1], target = 0
**Output:** -1

 

**Constraints:**

	- `1 <= nums.length <= 5000`

	- `-10^4 <= nums[i] <= 10^4`

	- All values of `nums` are **unique**.

	- `nums` is an ascending array that is possibly rotated.

	- `-10^4 <= target <= 10^4`

---

## Sample Test Case

```text
[4,5,6,7,0,1,2]
0
```

## Example Test Cases

```text
[4,5,6,7,0,1,2]
0
[4,5,6,7,0,1,2]
3
[1]
0
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)

