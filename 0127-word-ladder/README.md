# 127. Word Ladder

## Metadata

| Field | Value |
|---|---|
| Difficulty | Hard |
| Question ID | 127 |
| Slug | `word-ladder` |
| Topics | Hash Table, String, Breadth-First Search, Bidirectional Search |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/word-ladder/ |

---

## Problem

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s_1 -> s_2 -> ... -> s_k` such that:

	- Every adjacent pair of words differs by a single letter.

	- Every `s_i` for `1 Example 1:**

**Input:** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
**Output:** 5
**Explanation:** One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Example 2:**

**Input:** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
**Output:** 0
**Explanation:** The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

 

**Constraints:**

	- `1 <= beginWord.length <= 10`

	- `endWord.length == beginWord.length`

	- `1 <= wordList.length <= 5000`

	- `wordList[i].length == beginWord.length`

	- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.

	- `beginWord != endWord`

	- All the words in `wordList` are **unique**.

---

## Sample Test Case

```text
"hit"
"cog"
["hot","dot","dog","lot","log","cog"]
```

## Example Test Cases

```text
"hit"
"cog"
["hot","dot","dog","lot","log","cog"]
"hit"
"cog"
["hot","dot","dog","lot","log"]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

