# 990. Satisfiability of Equality Equations

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 1032 |
| Slug | `satisfiability-of-equality-equations` |
| Topics | Array, String, Union-Find, Graph Theory |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/satisfiability-of-equality-equations/ |

---

## Problem

You are given an array of strings `equations` that represent relationships between variables where each string `equations[i]` is of length `4` and takes one of two different forms: `"x_i==y_i"` or `"x_i!=y_i"`.Here, `x_i` and `y_i` are lowercase letters (not necessarily different) that represent one-letter variable names.

Return `true`* if it is possible to assign integers to variable names so as to satisfy all the given equations, or *`false`* otherwise*.

 

Example 1:**

**Input:** equations = ["a==b","b!=a"]
**Output:** false
**Explanation:** If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.

Example 2:**

**Input:** equations = ["b==a","a==b"]
**Output:** true
**Explanation:** We could assign a = 1 and b = 1 to satisfy both equations.

 

**Constraints:**

	- `1 <= equations.length <= 500`

	- `equations[i].length == 4`

	- `equations[i][0]` is a lowercase letter.

	- `equations[i][1]` is either `'='` or `'!'`.

	- `equations[i][2]` is `'='`.

	- `equations[i][3]` is a lowercase letter.

---

## Sample Test Case

```text
["a==b","b!=a"]
```

## Example Test Cases

```text
["a==b","b!=a"]
["b==a","a==b"]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [15 — C++](./submissions/002-15.md)
3. [15 — C++](./submissions/003-15.md)
4. [11 — C++](./submissions/004-11.md)

