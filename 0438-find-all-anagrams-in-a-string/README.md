# 438. Find All Anagrams in a String

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 438 |
| Slug | `find-all-anagrams-in-a-string` |
| Topics | Hash Table, String, Sliding Window |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/find-all-anagrams-in-a-string/ |

---

## Problem

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in **any order**.

 

Example 1:**

**Input:** s = "cbaebabacd", p = "abc"
**Output:** [0,6]
**Explanation:**
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:**

**Input:** s = "abab", p = "ab"
**Output:** [0,1,2]
**Explanation:**
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

 

**Constraints:**

	- `1 <= s.length, p.length <= 3 * 10^4`

	- `s` and `p` consist of lowercase English letters.

---

## Sample Test Case

```text
"cbaebabacd"
"abc"
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [14 — C++](./submissions/003-14.md)
4. [14 — C++](./submissions/004-14.md)

