# 720. Longest Word in Dictionary

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 720 |
| Slug | `longest-word-in-dictionary` |
| Topics | Array, Hash Table, String, Trie, Sorting |
| Total submissions | 0 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/longest-word-in-dictionary/ |

---

## Problem

Given an array of strings `words` representing an English Dictionary, return *the longest word in* `words` *that can be built one character at a time by other words in* `words`.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

Note that the word should be built from left to right with each additional character being added to the end of a previous word. 

 

Example 1:**

**Input:** words = ["w","wo","wor","worl","world"]
**Output:** "world"
**Explanation:** The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

Example 2:**

**Input:** words = ["a","banana","app","appl","ap","apply","apple"]
**Output:** "apple"
**Explanation:** Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

 

**Constraints:**

	- `1 <= words.length <= 1000`

	- `1 <= words[i].length <= 30`

	- `words[i]` consists of lowercase English letters.

---

## Sample Test Case

```text
["w","wo","wor","worl","world"]
```

## Example Test Cases

```text
["w","wo","wor","worl","world"]
["a","banana","app","appl","ap","apply","apple"]
```

## Hints

1. For every word in the input list, we can check whether all prefixes of that word are in the input list by using a Set.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.


