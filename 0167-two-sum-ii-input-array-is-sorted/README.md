# 167. Two Sum II - Input Array Is Sorted

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 167 |
| Slug | `two-sum-ii-input-array-is-sorted` |
| Topics | Array, Two Pointers, Binary Search |
| Total submissions | 9 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ |

---

## Problem

Given a **1-indexed** array of integers `numbers` that is already ***sorted in non-decreasing order***, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index_1]` and `numbers[index_2]` where `1 Example 1:**

**Input:** numbers = [2,7,11,15], target = 9
**Output:** [1,2]
**Explanation:** The sum of 2 and 7 is 9. Therefore, index_1 = 1, index_2 = 2. We return [1, 2].

Example 2:**

**Input:** numbers = [2,3,4], target = 6
**Output:** [1,3]
**Explanation:** The sum of 2 and 4 is 6. Therefore index_1 = 1, index_2 = 3. We return [1, 3].

Example 3:**

**Input:** numbers = [-1,0], target = -1
**Output:** [1,2]
**Explanation:** The sum of -1 and 0 is -1. Therefore index_1 = 1, index_2 = 2. We return [1, 2].

 

**Constraints:**

	- `2 <= numbers.length <= 3 * 10^4`

	- `-1000 <= numbers[i] <= 1000`

	- `numbers` is sorted in **non-decreasing order**.

	- `-1000 <= target <= 1000`

	- The tests are generated such that there is **exactly one solution**.

---

## Sample Test Case

```text
[2,7,11,15]
9
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)
4. [10 — C++](./submissions/004-10.md)
5. [10 — C++](./submissions/005-10.md)
6. [10 — C++](./submissions/006-10.md)
7. [10 — C++](./submissions/007-10.md)
8. [11 — C++](./submissions/008-11.md)
9. [11 — C++](./submissions/009-11.md)

