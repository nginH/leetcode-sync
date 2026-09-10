# 2062. Count Vowel Substrings of a String

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 2186 |
| Slug | `count-vowel-substrings-of-a-string` |
| Topics | Hash Table, String |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/count-vowel-substrings-of-a-string/ |

---

## Problem

A **substring** is a contiguous (non-empty) sequence of characters within a string.

A **vowel substring** is a substring that **only** consists of vowels (`'a'`, `'e'`, `'i'`, `'o'`, and `'u'`) and has **all five** vowels present in it.

Given a string `word`, return *the number of **vowel substrings** in* `word`.

 

Example 1:**

**Input:** word = "aeiouu"
**Output:** 2
**Explanation:** The vowel substrings of word are as follows (underlined):
- "**aeiou**u"
- "**aeiouu**"

Example 2:**

**Input:** word = "unicornarihan"
**Output:** 0
**Explanation:** Not all 5 vowels are present, so there are no vowel substrings.

Example 3:**

**Input:** word = "cuaieuouac"
**Output:** 7
**Explanation:** The vowel substrings of word are as follows (underlined):
- "c**uaieuo**uac"
- "c**uaieuou**ac"
- "c**uaieuoua**c"
- "cu**aieuo**uac"
- "cu**aieuou**ac"
- "cu**aieuoua**c"
- "cua**ieuoua**c"

 

**Constraints:**

	- `1 <= word.length <= 100`

	- `word` consists of lowercase English letters only.

---

## Sample Test Case

```text
"aeiouu"
```

## Hints

1. While generating substrings starting at any index, do you need to continue generating larger substrings if you encounter a consonant?
2. Can you store the count of characters to avoid generating substrings altogether?

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [11 — C++](./submissions/003-11.md)

