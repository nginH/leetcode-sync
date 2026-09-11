# 3718. Smallest Missing Multiple of K

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 4080 |
| Slug | `smallest-missing-multiple-of-k` |
| Topics | Array, Hash Table |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/smallest-missing-multiple-of-k/ |

---

## Problem

Given an integer array `nums` and an integer `k`, return the **smallest positive multiple** of `k` that is **missing** from `nums`.

A **multiple** of `k` is any positive integer divisible by `k`.

 

Example 1:**

**Input:** nums = [8,2,3,4,6], k = 2

**Output:** 10

**Explanation:**

The multiples of `k = 2` are 2, 4, 6, 8, 10, 12... and the smallest multiple missing from `nums` is 10.

Example 2:**

**Input:** nums = [1,4,7,10,15], k = 5

**Output:** 5

**Explanation:**

The multiples of `k = 5` are 5, 10, 15, 20... and the smallest multiple missing from `nums` is 5.

 

**Constraints:**

	- `1 <= nums.length <= 100`

	- `1 <= nums[i] <= 100`

	- `1 <= k <= 100`

---

## Sample Test Case

```text
[8,2,3,4,6]
2
```

## Example Test Cases

```text
[8,2,3,4,6]
2
[1,4,7,10,15]
5
```

## Hints

1. Add the values in <code>nums</code> to a hash set
2. Iterate through the positive multiples of <code>k</code> and return the first one not in the hash set

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

