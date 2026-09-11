# 278. First Bad Version

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 278 |
| Slug | `first-bad-version` |
| Topics | Binary Search, Interactive |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/first-bad-version/ |

---

## Problem

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:**

**Input:** n = 5, bad = 4
**Output:** 4
**Explanation:**
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:**

**Input:** n = 1, bad = 1
**Output:** 1

 

**Constraints:**

	- `1 <= bad <= n <= 2^31 - 1`

---

## Sample Test Case

```text
5
4
```

## Example Test Cases

```text
5
4
1
1
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [10 — C++](./submissions/002-10.md)

