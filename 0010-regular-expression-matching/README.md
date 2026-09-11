# 10. Regular Expression Matching

## Metadata

| Field | Value |
|---|---|
| Difficulty | Hard |
| Question ID | 10 |
| Slug | `regular-expression-matching` |
| Topics | String, Dynamic Programming, Recursion |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/regular-expression-matching/ |

---

## Problem

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

	- `'.'` Matches any single character.​​​​

	- `'*'` Matches zero or more of the preceding element.

Return a boolean indicating whether the matching covers the entire input string (not partial).

 

Example 1:**

**Input:** s = "aa", p = "a"
**Output:** false
**Explanation:** "a" does not match the entire string "aa".

Example 2:**

**Input:** s = "aa", p = "a*"
**Output:** true
**Explanation:** '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:**

**Input:** s = "ab", p = ".*"
**Output:** true
**Explanation:** ".*" means "zero or more (*) of any character (.)".

 

**Constraints:**

	- `1 <= s.length <= 20`

	- `1 <= p.length <= 20`

	- `s` contains only lowercase English letters.

	- `p` contains only lowercase English letters, `'.'`, and `'*'`.

	- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

---

## Sample Test Case

```text
"aa"
"a"
```

## Example Test Cases

```text
"aa"
"a"
"aa"
"a*"
"ab"
".*"
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


