# 4039. Sum of Decoded Numbers

## Metadata

| Field | Value |
|---|---|
| Difficulty | Medium |
| Question ID | 4401 |
| Slug | `sum-of-decoded-numbers` |
| Topics | None |
| Total submissions | 4 |
| Accepted submissions | 0 |
| LeetCode | https://leetcode.com/problems/sum-of-decoded-numbers/ |

---

## Problem

You are given an integer array `nums`.

Each `nums[i]` is an **encoded** integer representing two positive integers `x_i` and `y_i`. To decode `nums[i]`, define:

	- `width_i = nums[i] % 10`.

	- `d_i = floor(nums[i] / 10)`.

	- `x_i` as the integer formed by the first `width_i` digits of the decimal representation of `d_i`.

	- `y_i` as the integer formed by all remaining digits of the decimal representation of `d_i`.

It is guaranteed that the decimal representation of `d_i` contains more than `width_i` digits. Therefore, both `x_i` and `y_i` contain at least one digit.

The **decoded value** of `nums[i]` is `x_i^y_i`.

Return the sum of the decoded values of all elements in `nums`, modulo `10^9 + 7`.

The `floor()` function returns the integer part of the division.

 

Example 1:**

**Input:** nums = [231]

**Output:** 8

**Explanation:**

	- For 231, we have `width = 1`, `d = 23`, `x = 2`, and `y = 3`.

	- The decoded value of 231 is `2^3 = 8`.

	- Since there is only one element in `nums`, the sum of the decoded values is 8.

Example 2:**

**Input:** nums = [2522,2101]

**Output:** 1649

**Explanation:**

	- For 2522, we have `width = 2`, `d = 252`, `x = 25`, and `y = 2`.

	- The decoded value of 2522 is `25^2 = 625`.

	- For 2101, we have `width = 1`, `d = 210`, `x = 2`, and `y = 10`.

	- The decoded value of 2101 is `2^10 = 1024`.

	- The sum of the decoded values is `625 + 1024 = 1649`.

Example 3:**

**Input:** nums = [2301]

**Output:** 73741817

**Explanation:**

	- For 2301, we have `width = 1`, `d = 230`, `x = 2`, and `y = 30`.

	- The decoded value is `2^30 = 1073741824`.

	- Therefore, the answer is `1073741824 modulo (10^9 + 7) = 73741817`.

 

**Constraints:**

	- `1 <= nums.length <= 10^5`

	- `100 < nums[i] < 10^15`

	- `1 <= width_i <= 9`

	- `1 <= x_i, y_i < 10^9`

	- The digit sequences used to form `x_i` and `y_i` do not have leading zeros.

	- It is guaranteed that every element in `nums` is a valid encoded integer.

---

## Sample Test Case

```text
[231]
```

## Example Test Cases

```text
[231]
[2522,2101]
[2301]
```

## Hints

1. After removing the final digit <code>width<sub>i</sub></code>, determine the power of 10 that separates the first <code>width<sub>i</sub></code> decimal digits of <code>d<sub>i</sub></code> from the remaining digits.
2. Once <code>x<sub>i</sub></code> and <code>y<sub>i</sub></code> are decoded, use binary exponentiation to compute <code>x<sub>i</sub><sup>y<sub>i</sub></sup></code> modulo <code>10<sup>9</sup> + 7</code>.

---

## Submission History

All actual submitted solutions are stored separately in the `submissions/` directory.

1. [10 — C++](./submissions/001-10.md)
2. [11 — C++](./submissions/002-11.md)
3. [15 — C++](./submissions/003-15.md)
4. [11 — C++](./submissions/004-11.md)

