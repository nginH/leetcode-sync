# 338. Counting Bits

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 338 |
| Slug | `counting-bits` |
| Topics | Dynamic Programming, Bit Manipulation |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/counting-bits/ |

---

## Problem

Given an integer `n`, return *an array *`ans`* of length *`n + 1`* such that for each *`i`* *(`0 Example 1:**

**Input:** n = 2
**Output:** [0,1,1]
**Explanation:**
0 --> 0
1 --> 1
2 --> 10

Example 2:**

**Input:** n = 5
**Output:** [0,1,1,2,1,2]
**Explanation:**
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

 

**Constraints:**

	- `0 <= n <= 10^5`

 

**Follow up:**

	- It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear time `O(n)` and possibly in a single pass?

---

## Sample Test Case

```text
2
```

## Example Test Cases

```text
2
5
```

## Hints

1. You should make use of what you have produced already.
2. Divide the numbers in ranges like [2-3], [4-7], [8-15] and so on. And try to generate new range from previous.
3. Or does the odd/even status of the number help you in calculating the number of 1s?

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [50 — C++](./submissions/002-50.md)

