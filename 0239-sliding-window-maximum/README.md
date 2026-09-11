# 239. Sliding Window Maximum

## Metadata

| Field | Value |
|---|---|
| Difficulty | Hard |
| Question ID | 239 |
| Slug | `sliding-window-maximum` |
| Topics | Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue, Range Minimum/Maximum Query |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/sliding-window-maximum/ |

---

## Problem

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return *the max sliding window*.

 

Example 1:**

**Input:** nums = [1,3,-1,-3,5,3,6,7], k = 3
**Output:** [3,3,5,5,6,7]
**Explanation:** 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       **3**
 1 [3  -1  -3] 5  3  6  7       **3**
 1  3 [-1  -3  5] 3  6  7      ** 5**
 1  3  -1 [-3  5  3] 6  7       **5**
 1  3  -1  -3 [5  3  6] 7       **6**
 1  3  -1  -3  5 [3  6  7]      **7**

Example 2:**

**Input:** nums = [1], k = 1
**Output:** [1]

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `-10^4 <= nums[i] <= 10^4`

	- `1 <= k <= nums.length`

---

## Sample Test Case

```text
[1,3,-1,-3,5,3,6,7]
3
```

## Example Test Cases

```text
[1,3,-1,-3,5,3,6,7]
3
[1]
1
```

## Hints

1. How about using a data structure such as deque (double-ended queue)?
2. The queue size need not be the same as the window’s size.
3. Remove redundant elements and the queue should store only elements that need to be considered.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


