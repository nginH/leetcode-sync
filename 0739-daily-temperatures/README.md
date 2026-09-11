# 739. Daily Temperatures

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 739 |
| Slug | `daily-temperatures` |
| Topics | Array, Stack, Monotonic Stack |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/daily-temperatures/ |

---

## Problem

Given an array of integers `temperatures` represents the daily temperatures, return *an array* `answer` *such that* `answer[i]` *is the number of days you have to wait after the* `i^th` *day to get a warmer temperature*. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

 

Example 1:**

**Input:** temperatures = [73,74,75,71,69,72,76,73]
**Output:** [1,1,4,2,1,1,0,0]
Example 2:**

**Input:** temperatures = [30,40,50,60]
**Output:** [1,1,1,0]
Example 3:**

**Input:** temperatures = [30,60,90]
**Output:** [1,1,0]

 

**Constraints:**

	- `1 <= temperatures.length <= 10^5`

	- `30 <= temperatures[i] <= 100`

---

## Sample Test Case

```text
[73,74,75,71,69,72,76,73]
```

## Example Test Cases

```text
[73,74,75,71,69,72,76,73]
[30,40,50,60]
[30,60,90]
```

## Hints

1. If the temperature is say, 70 today, then in the future a warmer temperature must be either 71, 72, 73, ..., 99, or 100.  We could remember when all of them occur next.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


