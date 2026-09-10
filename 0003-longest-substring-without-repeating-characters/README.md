# 3. Longest Substring Without Repeating Characters

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 3 |
| Slug | `longest-substring-without-repeating-characters` |
| Topics | Hash Table, String, Sliding Window |
| Total submissions | 11 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/longest-substring-without-repeating-characters/ |

---

## Problem

Given a string `s`, find the length of the **longest** **substring** without duplicate characters.

 

Example 1:**

**Input:** s = "abcabcbb"
**Output:** 3
**Explanation:** The answer is "abc", with the length of 3. Note that `"bca"` and `"cab"` are also correct answers.

Example 2:**

**Input:** s = "bbbbb"
**Output:** 1
**Explanation:** The answer is "b", with the length of 1.

Example 3:**

**Input:** s = "pwwkew"
**Output:** 3
**Explanation:** The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

**Constraints:**

	- `0 <= s.length <= 10^5`

	- `s` consists of English letters, digits, symbols and spaces.

---

## Sample Test Case

```text
"abcabcbb"
```

## Hints

1. There are less than 100 unique characters. We can check all substrings with length at most 100 for example. This is a good enough approximation.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [10 — C++](./submissions/003-10.md)
4. [11 — C++](./submissions/004-11.md)
5. [11 — C++](./submissions/005-11.md)
6. [11 — C++](./submissions/006-11.md)
7. [11 — C++](./submissions/007-11.md)
8. [11 — C++](./submissions/008-11.md)
9. [11 — C++](./submissions/009-11.md)
10. [11 — C++](./submissions/010-11.md)
11. [15 — C++](./submissions/011-15.md)

