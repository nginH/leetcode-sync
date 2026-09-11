# 3720. Lexicographically Smallest Permutation Greater Than Target

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 4020 |
| Slug | `lexicographically-smallest-permutation-greater-than-target` |
| Topics | Hash Table, String, Greedy, Counting, Enumeration |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target/ |

---

## Problem

You are given two strings `s` and `target`, both having length `n`, consisting of lowercase English letters.

Return the **lexicographically smallest permutation** of `s` that is **strictly** greater than `target`. If no permutation of `s` is lexicographically strictly greater than `target`, return an empty string.

A string `a` is **lexicographically strictly greater **than a string `b` (of the same length) if in the first position where `a` and `b` differ, string `a` has a letter that appears later in the alphabet than the corresponding letter in `b`.

 

Example 1:**

**Input:** s = "abc", target = "bba"

**Output:** "bca"

**Explanation:**

	- The permutations of `s` (in lexicographical order) are `"abc"`, `"acb"`, `"bac"`, `"bca"`, `"cab"`, and `"cba"`.

	- The lexicographically smallest permutation that is strictly greater than `target` is `"bca"`.

Example 2:**

**Input:** s = "leet", target = "code"

**Output:** "eelt"

**Explanation:**

	- The permutations of `s` (in lexicographical order) are `"eelt"`, `"eetl"`, `"elet"`, `"elte"`, `"etel"`, `"etle"`, `"leet"`, `"lete"`, `"ltee"`, `"teel"`, `"tele"`, and `"tlee"`.

	- The lexicographically smallest permutation that is strictly greater than `target` is `"eelt"`.

Example 3:**

**Input:** s = "baba", target = "bbaa"

**Output:** ""

**Explanation:**

	- The permutations of `s` (in lexicographical order) are `"aabb"`, `"abab"`, `"abba"`, `"baab"`, `"baba"`, and `"bbaa"`.

	- None of them is lexicographically strictly greater than `target`. Therefore, the answer is `""`.

 

**Constraints:**

	- `1 <= s.length == target.length <= 300`

	- `s` and `target` consist of only lowercase English letters.

---

## Sample Test Case

```text
"abc"
"bba"
```

## Example Test Cases

```text
"abc"
"bba"
"leet"
"code"
"baba"
"bbaa"
```

## Hints

1. Maintain frequency counts of <code>s</code>.
2. Walk left-to-right; if equal to <code>target[i]</code> is possible, take it and continue.
3. If not, try the smallest letter strictly greater than <code>target[i]</code>.
4. If neither, backtrack left to the most recent index where you matched <code>target</code> and try to bump there.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


