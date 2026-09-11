# 274. H-Index

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 274 |
| Slug | `h-index` |
| Topics | Array, Sorting, Counting Sort |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/h-index/ |

---

## Problem

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `i^th` paper, return *the researcher's h-index*.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

 

Example 1:**

**Input:** citations = [3,0,6,1,5]
**Output:** 3
**Explanation:** [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:**

**Input:** citations = [1,3,1]
**Output:** 1

 

**Constraints:**

	- `n == citations.length`

	- `1 <= n <= 5000`

	- `0 <= citations[i] <= 1000`

---

## Sample Test Case

```text
[3,0,6,1,5]
```

## Example Test Cases

```text
[3,0,6,1,5]
[1,3,1]
```

## Hints

1. An easy approach is to sort the array first.
2. What are the possible values of h-index?
3. A faster approach is to use extra space.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [11 — C++](./submissions/003-11.md)

