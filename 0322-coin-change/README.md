# 322. Coin Change

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 322 |
| Slug | `coin-change` |
| Topics | Array, Dynamic Programming, Breadth-First Search, Knapsack Problem, Complete Knapsack |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/coin-change/ |

---

## Problem

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return *the fewest number of coins that you need to make up that amount*. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:**

**Input:** coins = [1,2,5], amount = 11
**Output:** 3
**Explanation:** 11 = 5 + 5 + 1

Example 2:**

**Input:** coins = [2], amount = 3
**Output:** -1

Example 3:**

**Input:** coins = [1], amount = 0
**Output:** 0

 

**Constraints:**

	- `1 <= coins.length <= 12`

	- `1 <= coins[i] <= 2^31 - 1`

	- `0 <= amount <= 10^4`

---

## Sample Test Case

```text
[1,2,5]
11
```

## Example Test Cases

```text
[1,2,5]
11
[2]
3
[1]
0
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


