# 229. Majority Element II

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 229 |
| Slug | `majority-element-ii` |
| Topics | Array, Hash Table, Sorting, Counting, Boyer–Moore Majority Vote Algorithm |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/majority-element-ii/ |

---

## Problem

Given an integer array of size `n`, find all elements that appear more than `&lfloor;n / 3&rfloor;` times.

 

Example 1:**

**Input:** nums = [3,2,3]
**Output:** [3]

Example 2:**

**Input:** nums = [1]
**Output:** [1]

Example 3:**

**Input:** nums = [1,2]
**Output:** [1,2]

 

**Constraints:**

	- `1 <= nums.length <= 5 * 10^4`

	- `-10^9 <= nums[i] <= 10^9`

 

**Follow up:** Could you solve the problem in linear time and in `O(1)` space?

---

## Sample Test Case

```text
[3,2,3]
```

## Example Test Cases

```text
[3,2,3]
[1]
[1,2]
```

## Hints

1. Think about the possible number of elements that can appear more than ⌊ n/3 ⌋ times in the array.
2. It can be at most two. Why?
3. Consider using Boyer-Moore Voting Algorithm, which is efficient for finding elements that appear more than a certain threshold.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


