# 28. Find the Index of the First Occurrence in a String

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 28 |
| Slug | `find-the-index-of-the-first-occurrence-in-a-string` |
| Topics | Two Pointers, String, String Matching, Z Algorithm, Knuth–Morris–Pratt Algorithm, Boyer–Moore String-Search Algorithm |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ |

---

## Problem

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

 

Example 1:**

**Input:** haystack = "sadbutsad", needle = "sad"
**Output:** 0
**Explanation:** "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:**

**Input:** haystack = "leetcode", needle = "leeto"
**Output:** -1
**Explanation:** "leeto" did not occur in "leetcode", so we return -1.

 

**Constraints:**

	- `1 <= haystack.length, needle.length <= 10^4`

	- `haystack` and `needle` consist of only lowercase English characters.

---

## Sample Test Case

```text
"sadbutsad"
"sad"
```

## Example Test Cases

```text
"sadbutsad"
"sad"
"leetcode"
"leeto"
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


