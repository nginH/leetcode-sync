# 183. Customers Who Never Order

## Metadata

| Field | Value |
|---|---|
| Difficulty | Easy |
| Question ID | 183 |
| Slug | `customers-who-never-order` |
| Topics | Database |
| Total submissions | 1 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/customers-who-never-order/ |

---

## Problem

Table: `Customers`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.

 

Table: `Orders`

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference columns) of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.

 

Write a solution to find all customers who never order anything.

Return the result table in **any order**.

The result format is in the following example.

 

Example 1:**

**Input:** 
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
**Output:** 
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+

---

## Sample Test Case

```text
{"headers": {"Customers": ["id", "name"], "Orders": ["id", "customerId"]}, "rows": {"Customers": [[1, "Joe"], [2, "Henry"], [3, "Sam"], [4, "Max"]], "Orders": [[1, 3], [2, 1]]}}
```

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — PostgreSQL](./submissions/001-10.md)

