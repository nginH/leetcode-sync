# 875. Koko Eating Bananas

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 907 |
| Slug | `koko-eating-bananas` |
| Topics | Array, Binary Search |
| Total submissions | 6 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/koko-eating-bananas/ |

---

## Problem

Koko loves to eat bananas. There are `n` piles of bananas, the `i^th` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return *the minimum integer* `k` *such that she can eat all the bananas within* `h` *hours*.

 

Example 1:**

**Input:** piles = [3,6,7,11], h = 8
**Output:** 4

Example 2:**

**Input:** piles = [30,11,23,4,20], h = 5
**Output:** 30

Example 3:**

**Input:** piles = [30,11,23,4,20], h = 6
**Output:** 23

 

**Constraints:**

	- `1 <= piles.length <= 10^4`

	- `piles.length <= h <= 10^9`

	- `1 <= piles[i] <= 10^9`

---

## Sample Test Case

```text
[3,6,7,11]
8
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [15 — C++](./submissions/002-15.md)
3. [15 — C++](./submissions/003-15.md)
4. [11 — C++](./submissions/004-11.md)
5. [10 — C++](./submissions/005-10.md)
6. [15 — C++](./submissions/006-15.md)

