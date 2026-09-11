# 647. Palindromic Substrings

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 647 |
| Slug | `palindromic-substrings` |
| Topics | Two Pointers, String, Dynamic Programming |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/palindromic-substrings/ |

---

## Problem

Given a string `s`, return *the number of **palindromic substrings** in it*.

A string is a **palindrome** when it reads the same backward as forward.

A **substring** is a contiguous sequence of characters within the string.

 

Example 1:**

**Input:** s = "abc"
**Output:** 3
**Explanation:** Three palindromic strings: "a", "b", "c".

Example 2:**

**Input:** s = "aaa"
**Output:** 6
**Explanation:** Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 

**Constraints:**

	- `1 <= s.length <= 1000`

	- `s` consists of lowercase English letters.

---

## Sample Test Case

```text
"abc"
```

## Example Test Cases

```text
"abc"
"aaa"
```

## Hints

1. How can we reuse a previously computed palindrome to compute a larger palindrome?
2. If “aba” is a palindrome, is “xabax” a palindrome? Similarly is “xabay” a palindrome?
3. Complexity based hint:</br>
If we use brute force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation?

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)
4. [11 — C++](./submissions/004-11.md)

