# 1. Two Sum

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 1 |
| Slug | `two-sum` |
| Topics | Array, Hash Table |
| Total submissions | 9 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/two-sum/ |

---

## Problem

You are given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

 

Example 1:**

**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:**

**Input:** nums = [3,2,4], target = 6
**Output:** [1,2]

Example 3:**

**Input:** nums = [3,3], target = 6
**Output:** [0,1]

 

**Constraints:**

	- `2  time complexity?

---

## Sample Test Case

```text
[2,7,11,15]
9
```

## Example Test Cases

```text
[2,7,11,15]
9
[3,2,4]
6
[3,3]
6
```

## Hints

1. A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions just for completeness. It is from these brute force solutions that you can come up with optimizations.
2. So, if we fix one of the numbers, say <code>x</code>, we have to scan the entire array to find the next number <code>y</code> which is <code>value - x</code> where value is the input parameter. Can we change our array somehow so that this search becomes faster?
3. The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)
4. [11 — C++](./submissions/004-11.md)
5. [10 — C++](./submissions/005-10.md)
6. [10 — C++](./submissions/006-10.md)
7. [10 — C++](./submissions/007-10.md)
8. [10 — C++](./submissions/008-10.md)
9. [10 — C++](./submissions/009-10.md)

