# 136. Single Number

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 136 |
| Slug | `single-number` |
| Topics | Array, Bit Manipulation |
| Total submissions | 1 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/single-number/ |

---

## Problem

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:**

**Input:** nums = [2,2,1]

**Output:** 1

Example 2:**

**Input:** nums = [4,1,2,1,2]

**Output:** 4

Example 3:**

**Input:** nums = [1]

**Output:** 1

 

**Constraints:**

	- `1 <= nums.length <= 3 * 10^4`

	- `-3 * 10^4 <= nums[i] <= 3 * 10^4`

	- Each element in the array appears twice except for one element which appears only once.

---

## Sample Test Case

```text
[2,2,1]
```

## Hints

1. Think about the XOR (^) operator's property.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)

