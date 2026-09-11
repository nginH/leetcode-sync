# 1456. Maximum Number of Vowels in a Substring of Given Length

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 1567 |
| Slug | `maximum-number-of-vowels-in-a-substring-of-given-length` |
| Topics | String, Sliding Window |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/ |

---

## Problem

Given a string `s` and an integer `k`, return *the maximum number of vowel letters in any substring of *`s`* with length *`k`.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

 

Example 1:**

**Input:** s = "abciiidef", k = 3
**Output:** 3
**Explanation:** The substring "iii" contains 3 vowel letters.

Example 2:**

**Input:** s = "aeiou", k = 2
**Output:** 2
**Explanation:** Any substring of length 2 contains 2 vowels.

Example 3:**

**Input:** s = "leetcode", k = 3
**Output:** 2
**Explanation:** "lee", "eet" and "ode" contain 2 vowels.

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

	- `1 <= k <= s.length`

---

## Sample Test Case

```text
"abciiidef"
3
```

## Example Test Cases

```text
"abciiidef"
3
"aeiou"
2
"leetcode"
3
```

## Hints

1. Keep a window of size k and maintain the number of vowels in it.
2. Keep moving the window and update the number of vowels while moving. Answer is max number of vowels of any window.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)

