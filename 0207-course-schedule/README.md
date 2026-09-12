# 207. Course Schedule

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 207 |
| Slug | `course-schedule` |
| Topics | Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph |
| Total submissions | 10 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/course-schedule/ |

---

## Problem

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you **must** take course `b_i` first if you want to take course `a_i`.

	- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

 

Example 1:**

**Input:** numCourses = 2, prerequisites = [[1,0]]
**Output:** true
**Explanation:** There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:**

**Input:** numCourses = 2, prerequisites = [[1,0],[0,1]]
**Output:** false
**Explanation:** There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

 

**Constraints:**

	- `1 <= numCourses <= 2000`

	- `0 <= prerequisites.length <= 5000`

	- `prerequisites[i].length == 2`

	- `0 <= a_i, b_i < numCourses`

	- All the pairs prerequisites[i] are **unique**.

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
2
[[1,0],[0,1]]
```

## Hints

1. This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
2. <a href="https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/03Graphs.pdf" target="_blank">Topological Sort via DFS</a> - A great tutorial explaining the basic concepts of Topological Sort.
3. Topological sort could also be done via <a href="http://en.wikipedia.org/wiki/Topological_sorting#Algorithms" target="_blank">BFS</a>.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/submission-2139988000.md)
2. [11 — C++](./submissions/002-11.md)
3. [11 — C++](./submissions/003-11.md)
4. [10 — C++](./submissions/submission-2139986591.md)
5. [10 — C++](./submissions/001-10.md)
6. [10 — C++](./submissions/002-10.md)
7. [10 — C++](./submissions/003-10.md)
8. [10 — C++](./submissions/004-10.md)
9. [11 — C++](./submissions/005-11.md)
10. [10 — C++](./submissions/006-10.md)

