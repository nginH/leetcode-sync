# 182. Duplicate Emails

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 182 |
| Slug | `duplicate-emails` |
| Topics | Database |
| Total submissions | 2 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/duplicate-emails/ |

---

## Problem

Table: `Person`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

 

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.

Return the result table in **any order**.

The result format is in the following example.

 

Example 1:**

**Input:** 
Person table:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
**Output:** 
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
**Explanation:** a@b.com is repeated two times.

---

## Sample Test Case

```text
{"headers": {"Person": ["id", "email"]}, "rows": {"Person": [[1, "a@b.com"], [2, "c@d.com"], [3, "a@b.com"]]}}
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — PostgreSQL](./submissions/001-10.md)
2. [10 — PostgreSQL](./submissions/002-10.md)

