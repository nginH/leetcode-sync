# 4015. Weighted Sum of a Tree

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 4352 |
| Slug | `weighted-sum-of-a-tree` |
| Topics | Array, Tree, Depth-First Search |
| Total submissions | 3 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/weighted-sum-of-a-tree/ |

---

## Problem

You are given an integer array `parent` of length `n` representing a rooted tree with nodes labeled from 0 to `n - 1`.

The tree is **rooted** at node 0, so `parent[0] = -1`. For each node `i` where `1 Example 1:**

​​​​​​​

**Input:** parent = [-1,0,0,0,2,2], nums = [5,2,3,1,4,6]

**Output:** 37

**Explanation:**

The height of the tree is 3.

	
		
			Node
			`nums[i]`
			Depth (`d`)
			Weight
		
		
			0
			5
			1
			`5 * (3 - 1 + 1) = 15`
		
		
			1
			2
			2
			`2 * (3 - 2 + 1) = 4`
		
		
			2
			3
			2
			`3 * (3 - 2 + 1) = 6`
		
		
			3
			1
			2
			`1 * (3 - 2 + 1) = 2`
		
		
			4
			4
			3
			`4 * (3 - 3 + 1) = 4`
		
		
			5
			6
			3
			`6 * (3 - 3 + 1) = 6`
		
	

The sum of all node weights is `15 + 4 + 6 + 2 + 4 + 6 = 37`.

Example 2:**

​​​​​​​​​​​​​​

**Input:** parent = [-1,0,1,2], nums = [1,2,3,4]

**Output:** 20

**Explanation:**

The height of the tree is 4.

	
		
			Node
			`nums[i]`
			Depth (`d`)
			Weight
		
		
			0
			1
			1
			`1 * (4 - 1 + 1) = 4`
		
		
			1
			2
			2
			`2 * (4 - 2 + 1) = 6`
		
		
			2
			3
			3
			`3 * (4 - 3 + 1) = 6`
		
		
			3
			4
			4
			`4 * (4 - 4 + 1) = 4`
		
	

The sum of all node weights is `4 + 6 + 6 + 4 = 20`.

 

**Constraints:**

	- `1 <= n <= 10^5`

	- `n == parent.length == nums.length`

	- `parent[0] == -1`

	- `0 <= parent[i] <= n - 1` for all `i` in `[1, n - 1]`

	- `1 <= nums[i] <= 10^6`

	- The input is generated such that the array `parent` represents a valid tree rooted at node 0.

---

## Sample Test Case

```text
[-1,0,0,0,2,2]
[5,2,3,1,4,6]
```

## Example Test Cases

```text
[-1,0,0,0,2,2]
[5,2,3,1,4,6]
[-1,0,1,2]
[1,2,3,4]
```

## Hints

1. Build the tree and traverse it from the root to determine the depth of every node and the height <code>h</code>.
2. Once <code>h</code> is known, calculate and sum <code>nums[i] * (h - depth[i] + 1)</code> for every node <code>i</code>.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [20 — C++](./submissions/002-20.md)
3. [11 — C++](./submissions/003-11.md)

