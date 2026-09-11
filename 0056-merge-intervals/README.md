# 56. Merge Intervals

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 56 |
| Slug | `merge-intervals` |
| Topics | Array, Sorting, Quicksort |
| Total submissions | 7 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/merge-intervals/ |

---

## Problem

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

 

Example 1:**

**Input:** intervals = [[1,3],[2,6],[8,10],[15,18]]
**Output:** [[1,6],[8,10],[15,18]]
**Explanation:** Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:**

**Input:** intervals = [[1,4],[4,5]]
**Output:** [[1,5]]
**Explanation:** Intervals [1,4] and [4,5] are considered overlapping.

Example 3:**

**Input:** intervals = [[4,7],[1,4]]
**Output:** [[1,7]]
**Explanation:** Intervals [1,4] and [4,7] are considered overlapping.

 

**Constraints:**

	- `1 <= intervals.length <= 10^4`

	- `intervals[i].length == 2`

	- `0 <= start_i <= end_i <= 10^4`

---

## Sample Test Case

```text
[[1,3],[2,6],[8,10],[15,18]]
```

## Example Test Cases

```text
[[1,3],[2,6],[8,10],[15,18]]
[[1,4],[4,5]]
[[4,7],[1,4]]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [11 — C++](./submissions/003-11.md)
4. [10 — C++](./submissions/004-10.md)
5. [11 — C++](./submissions/005-11.md)
6. [11 — C++](./submissions/006-11.md)
7. [11 — C++](./submissions/007-11.md)

