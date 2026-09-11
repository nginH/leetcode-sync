# 143. Reorder List

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 143 |
| Slug | `reorder-list` |
| Topics | Linked List, Two Pointers, Stack, Recursion |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/reorder-list/ |

---

## Problem

You are given the head of a singly linked-list. The list can be represented as:

L_0 &rarr; L_1 &rarr; &hellip; &rarr; L_n - 1 &rarr; L_n

*Reorder the list to be on the following form:*

L_0 &rarr; L_n &rarr; L_1 &rarr; L_n - 1 &rarr; L_2 &rarr; L_n - 2 &rarr; &hellip;

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:**

**Input:** head = [1,2,3,4]
**Output:** [1,4,2,3]

Example 2:**

**Input:** head = [1,2,3,4,5]
**Output:** [1,5,2,4,3]

 

**Constraints:**

	- The number of nodes in the list is in the range `[1, 5 * 10^4]`.

	- `1 <= Node.val <= 1000`

---

## Sample Test Case

```text
[1,2,3,4]
```

## Example Test Cases

```text
[1,2,3,4]
[1,2,3,4,5]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [15 — C++](./submissions/003-15.md)

