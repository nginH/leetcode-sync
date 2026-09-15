# 210. Course Schedule II

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 210 |
| Slug | `course-schedule-ii` |
| Topics | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort |
| Total submissions | 9 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/course-schedule-ii/ |

---

## Problem

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you **must** take course `b_i` first if you want to take course `a_i`.

	- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return *the ordering of courses you should take to finish all courses*. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

 

Example 1:**

**Input:** numCourses = 2, prerequisites = [[1,0]]
**Output:** [0,1]
**Explanation:** There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:**

**Input:** numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
**Output:** [0,2,1,3]
**Explanation:** There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:**

**Input:** numCourses = 1, prerequisites = []
**Output:** [0]

 

**Constraints:**

	- `1 <= numCourses <= 2000`

	- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`

	- `prerequisites[i].length == 2`

	- `0 <= a_i, b_i < numCourses`

	- `a_i != b_i`

	- All the pairs `[a_i, b_i]` are **distinct**.

---

## Sample Test Case

```text
2
[[1,0]]
```

## Example Test Cases

```text
2
[[1,0]]
4
[[1,0],[2,0],[3,1],[3,2]]
1
[]
```

## Hints

1. This problem is equivalent to finding the topological order in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
2. <a href="https://www.youtube.com/watch?v=ozso3xxkVGU" target="_blank">Topological Sort via DFS</a> - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
3. Topological sort could also be done via <a href="http://en.wikipedia.org/wiki/Topological_sorting#Algorithms" target="_blank">BFS</a>.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/submission-2142674664.md)
2. [11 — C++](./submissions/submission-2142672783.md)
3. [11 — C++](./submissions/submission-2142610057.md)
4. [10 — C++](./submissions/001-10.md)
5. [11 — C++](./submissions/002-11.md)
6. [11 — C++](./submissions/003-11.md)
7. [10 — C++](./submissions/004-10.md)
8. [10 — C++](./submissions/005-10.md)
9. [11 — C++](./submissions/006-11.md)

