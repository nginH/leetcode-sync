# 743. Network Delay Time

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 744 |
| Slug | `network-delay-time` |
| Topics | Depth-First Search, Breadth-First Search, Graph Theory, Heap (Priority Queue), Shortest Path, Dijkstra's Algorithm |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/network-delay-time/ |

---

## Problem

You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (u_i, v_i, w_i)`, where `u_i` is the source node, `v_i` is the target node, and `w_i` is the time it takes for a signal to travel from source to target.

We will send a signal from a given node `k`. Return *the **minimum** time it takes for all the* `n` *nodes to receive the signal*. If it is impossible for all the `n` nodes to receive the signal, return `-1`.

 

Example 1:**

**Input:** times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
**Output:** 2

Example 2:**

**Input:** times = [[1,2,1]], n = 2, k = 1
**Output:** 1

Example 3:**

**Input:** times = [[1,2,1]], n = 2, k = 2
**Output:** -1

 

**Constraints:**

	- `1 <= k <= n <= 100`

	- `1 <= times.length <= 6000`

	- `times[i].length == 3`

	- `1 <= u_i, v_i <= n`

	- `u_i != v_i`

	- `0 <= w_i <= 100`

	- All the pairs `(u_i, v_i)` are **unique**. (i.e., no multiple edges.)

---

## Sample Test Case

```text
[[2,1,1],[2,3,1],[3,4,1]]
4
2
```

## Example Test Cases

```text
[[2,1,1],[2,3,1],[3,4,1]]
4
2
[[1,2,1]]
2
1
[[1,2,1]]
2
2
```

## Hints

1. We visit each node at some time, and if that time is better than the fastest time we've reached this node, we travel along outgoing edges in sorted order.  Alternatively, we could use Dijkstra's algorithm.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

