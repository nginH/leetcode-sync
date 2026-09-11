# 20. Valid Parentheses

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 20 |
| Slug | `valid-parentheses` |
| Topics | String, Stack, Bracket Sequences |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/valid-parentheses/ |

---

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

	- Open brackets must be closed by the same type of brackets.

	- Open brackets must be closed in the correct order.

	- Every close bracket has a corresponding open bracket of the same type.

 

Example 1:**

**Input:** s = "()"

**Output:** true

Example 2:**

**Input:** s = "()[]{}"

**Output:** true

Example 3:**

**Input:** s = "(]"

**Output:** false

Example 4:**

**Input:** s = "([])"

**Output:** true

Example 5:**

**Input:** s = "([)]"

**Output:** false

 

**Constraints:**

	- `1 <= s.length <= 10^4`

	- `s` consists of parentheses only `'()[]{}'`.

---

## Sample Test Case

```text
"()"
```

## Example Test Cases

```text
"()"
"()[]{}"
"(]"
"([])"
"([)]"
```

## Hints

1. Use a stack of characters.
2. When you encounter an opening bracket, push it to the top of the stack.
3. When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


