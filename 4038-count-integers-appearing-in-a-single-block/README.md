# 4038. Count Integers Appearing in a Single Block

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 4410 |
| Slug | `count-integers-appearing-in-a-single-block` |
| Topics | Array, Hash Table, Counting |
| Total submissions | 8 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/count-integers-appearing-in-a-single-block/ |

---

## Problem

You are given an integer array `nums`.

An integer `x` is **special** if all occurrences of `x` in `nums` appear in a single **contiguous** block.

Return the number of **distinct** special integers in `nums`.

 

Example 1:**

**Input:** nums = [1,2,2,1]

**Output:** 1

**Explanation:**

	- 1 appears at indices 0 and 3, forming two separate blocks, so it is not special.

	- 2 appears in a single contiguous block at indices `[1, 2]`, so it is special.

Therefore, there is one special integer.

Example 2:**

**Input:** nums = [3,3,1,2,2,1]

**Output:** 2

**Explanation:**

	- 3 appears in a single contiguous block at indices `[0, 1]`, so it is special.

	- 1 appears at indices 2 and 5, forming two separate blocks, so it is not special.

	- 2 appears in a single contiguous block at indices `[3, 4]`, so it is special.

Therefore, there are two special integers.

 

**Constraints:**

	- `1 <= nums.length <= 100`

	- `1 <= nums[i] <= 100`

---

## Sample Test Case

```text
[1,2,2,1]
```

## Example Test Cases

```text
[1,2,2,1]
[3,3,1,2,2,1]
```

## Hints

1. For each distinct value <code>x</code>, let <code>l</code> and <code>r</code> be its first and last positions. All occurrences of <code>x</code> form one contiguous block exactly when <code>r - l + 1</code> equals the frequency of <code>x</code>.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [11 — C++](./submissions/003-11.md)
4. [11 — C++](./submissions/004-11.md)
5. [11 — C++](./submissions/005-11.md)
6. [11 — C++](./submissions/006-11.md)
7. [11 — C++](./submissions/007-11.md)
8. [11 — C++](./submissions/008-11.md)

