# 287. Find the Duplicate Number

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 287 |
| Slug | `find-the-duplicate-number` |
| Topics | Array, Two Pointers, Binary Search, Bit Manipulation, Pigeonhole Principle, Floyd's Cycle Finding Algorithm |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/find-the-duplicate-number/ |

---

## Problem

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and using only constant extra space.

 

Example 1:**

**Input:** nums = [1,3,4,2,2]
**Output:** 2

Example 2:**

**Input:** nums = [3,1,3,4,2]
**Output:** 3

Example 3:**

**Input:** nums = [3,3,3,3,3]
**Output:** 3

 

**Constraints:**

	- `1 <= n <= 10^5`

	- `nums.length == n + 1`

	- `1 <= nums[i] <= n`

	- All the integers in `nums` appear only **once** except for **precisely one integer** which appears **two or more** times.

 

**Follow up:**

	- How can we prove that at least one duplicate number must exist in `nums`?

	- Can you solve the problem in linear runtime complexity?

---

## Sample Test Case

```text
[1,3,4,2,2]
```

## Example Test Cases

```text
[1,3,4,2,2]
[3,1,3,4,2]
[3,3,3,3,3]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


