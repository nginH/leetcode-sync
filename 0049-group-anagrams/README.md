# 49. Group Anagrams

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 49 |
| Slug | `group-anagrams` |
| Topics | Array, Hash Table, String, Sorting |
| Total submissions | 1 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/group-anagrams/ |

---

## Problem

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

 

Example 1:**

**Input:** strs = ["eat","tea","tan","ate","nat","bat"]

**Output:** [["bat"],["nat","tan"],["ate","eat","tea"]]

**Explanation:**

	- There is no string in strs that can be rearranged to form `"bat"`.

	- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.

	- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

Example 2:**

**Input:** strs = [""]

**Output:** [[""]]

Example 3:**

**Input:** strs = ["a"]

**Output:** [["a"]]

 

**Constraints:**

	- `1 <= strs.length <= 10^4`

	- `0 <= strs[i].length <= 100`

	- `strs[i]` consists of lowercase English letters.

---

## Sample Test Case

```text
["eat","tea","tan","ate","nat","bat"]
```

## Example Test Cases

```text
["eat","tea","tan","ate","nat","bat"]
[""]
["a"]
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)

