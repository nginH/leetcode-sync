# 139. Word Break

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 139 |
| Slug | `word-break` |
| Topics | Array, Hash Table, String, Dynamic Programming, Trie, Memoization, Brute-Force Search |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/word-break/ |

---

## Problem

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:**

**Input:** s = "leetcode", wordDict = ["leet","code"]
**Output:** true
**Explanation:** Return true because "leetcode" can be segmented as "leet code".

Example 2:**

**Input:** s = "applepenapple", wordDict = ["apple","pen"]
**Output:** true
**Explanation:** Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:**

**Input:** s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
**Output:** false

 

**Constraints:**

	- `1 <= s.length <= 300`

	- `1 <= wordDict.length <= 1000`

	- `1 <= wordDict[i].length <= 20`

	- `s` and `wordDict[i]` consist of only lowercase English letters.

	- All the strings of `wordDict` are **unique**.

---

## Sample Test Case

```text
"leetcode"
["leet","code"]
```

## Example Test Cases

```text
"leetcode"
["leet","code"]
"applepenapple"
["apple","pen"]
"catsandog"
["cats","dog","sand","and","cat"]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)
3. [10 — C++](./submissions/003-10.md)
4. [14 — C++](./submissions/004-14.md)

