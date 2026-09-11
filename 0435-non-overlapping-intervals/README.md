# 435. Non-overlapping Intervals

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 435 |
| Slug | `non-overlapping-intervals` |
| Topics | Array, Dynamic Programming, Greedy, Sorting |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/non-overlapping-intervals/ |

---

## Problem

Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*.

**Note** that intervals which only touch at a point are **non-overlapping**. For example, `[1, 2]` and `[2, 3]` are non-overlapping.

 

Example 1:**

**Input:** intervals = [[1,2],[2,3],[3,4],[1,3]]
**Output:** 1
**Explanation:** [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:**

**Input:** intervals = [[1,2],[1,2],[1,2]]
**Output:** 2
**Explanation:** You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:**

**Input:** intervals = [[1,2],[2,3]]
**Output:** 0
**Explanation:** You don't need to remove any of the intervals since they're already non-overlapping.

 

**Constraints:**

	- `1 <= intervals.length <= 10^5`

	- `intervals[i].length == 2`

	- `-5 * 10^4 <= start_i < end_i <= 5 * 10^4`

---

## Sample Test Case

```text
[[1,2],[2,3],[3,4],[1,3]]
```

## Example Test Cases

```text
[[1,2],[2,3],[3,4],[1,3]]
[[1,2],[1,2],[1,2]]
[[1,2],[2,3]]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


