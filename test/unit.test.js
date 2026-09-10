import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  htmlToMarkdown,
  formatDate,
  safeSlug,
  getMarkdownLanguage,
  generateQuestionMarkdown,
  generateSubmissionMarkdown,
} from "../index.js";

describe("Unit Tests - LeetCode Sync Helpers", () => {
  describe("htmlToMarkdown", () => {
    it("should convert code blocks correctly", () => {
      const html = "<pre><code>const x = 1;</code></pre>";
      const md = htmlToMarkdown(html);
      assert.match(md, /```\s*const x = 1;\s*```/);
    });

    it("should convert inline code, bold, and italic", () => {
      const html = "<code>let a = 5;</code> <strong>strong</strong> <b>bold</b> <em>em</em> <i>italic</i>";
      const md = htmlToMarkdown(html);
      assert.equal(md, "`let a = 5;` **strong** **bold** *em* *italic*");
    });

    it("should convert headings and lists", () => {
      const html = "<h1>Title 1</h1><h2>Title 2</h2><ul><li>Item 1</li><li>Item 2</li></ul>";
      const md = htmlToMarkdown(html);
      assert.match(md, /# Title 1/);
      assert.match(md, /## Title 2/);
      assert.match(md, /- Item 1/);
      assert.match(md, /- Item 2/);
    });

    it("should convert HTML entities", () => {
      const html = "word&nbsp;&amp;&lt;&gt;&quot;&#39;";
      const md = htmlToMarkdown(html);
      assert.equal(md, "word &<>\x22'");
    });

    it("should handle empty or undefined input", () => {
      assert.equal(htmlToMarkdown(""), "");
      assert.equal(htmlToMarkdown(undefined), "");
    });
  });

  describe("formatDate", () => {
    it("should convert epoch seconds to ISO string", () => {
      const timestamp = 1788287758;
      const iso = formatDate(timestamp);
      assert.equal(iso, new Date(timestamp * 1000).toISOString());
    });
  });

  describe("safeSlug", () => {
    it("should lowercase and replace special characters with hyphens", () => {
      assert.equal(safeSlug("Two Sum: Part 2!"), "two-sum-part-2");
      assert.equal(safeSlug("A & B - Test"), "a-b-test");
    });

    it("should trim leading and trailing hyphens", () => {
      assert.equal(safeSlug("---hello world---"), "hello-world");
    });

    it("should handle null and undefined", () => {
      assert.equal(safeSlug(null), "");
      assert.equal(safeSlug(undefined), "");
    });
  });

  describe("getMarkdownLanguage", () => {
    it("should map common languages properly", () => {
      assert.equal(getMarkdownLanguage("cpp"), "cpp");
      assert.equal(getMarkdownLanguage("c++"), "cpp");
      assert.equal(getMarkdownLanguage("python"), "python");
      assert.equal(getMarkdownLanguage("python3"), "python");
      assert.equal(getMarkdownLanguage("golang"), "go");
      assert.equal(getMarkdownLanguage("javascript"), "javascript");
      assert.equal(getMarkdownLanguage("typescript"), "typescript");
      assert.equal(getMarkdownLanguage("java"), "java");
      assert.equal(getMarkdownLanguage("rust"), "rust");
    });

    it("should handle object language structure", () => {
      assert.equal(getMarkdownLanguage({ name: "cpp", verboseName: "C++" }), "cpp");
      assert.equal(getMarkdownLanguage({ verboseName: "python" }), "python");
    });

    it("should fallback to text for unknown languages", () => {
      assert.equal(getMarkdownLanguage("unknown_lang"), "text");
      assert.equal(getMarkdownLanguage(null), "text");
    });
  });

  describe("generateQuestionMarkdown", () => {
    const mockQuestion = {
      questionFrontendId: "1",
      questionId: "1",
      title: "Two Sum",
      titleSlug: "two-sum",
      difficulty: "Easy",
      topicTags: [{ name: "Array" }, { name: "Hash Table" }],
      content: "<p>Given an array of integers <code>nums</code>...</p>",
      sampleTestCase: "[2,7,11,15]\n9",
      exampleTestcases: "[2,7,11,15]\n9\n[3,2,4]\n6",
      hints: ["Try using a hash map."],
    };

    const mockHistory = [
      { id: "101", status: "Accepted", langName: "C++" },
      { id: "100", status: "Wrong Answer", langName: "Python3" },
    ];

    it("should generate markdown with metadata, problem description, test cases, and history", () => {
      const md = generateQuestionMarkdown(mockQuestion, mockHistory);

      assert.match(md, /# 1\. Two Sum/);
      assert.match(md, /\| Difficulty \| Easy \|/);
      assert.match(md, /\| Topics \| Array, Hash Table \|/);
      assert.match(md, /\| Total submissions \| 2 \|/);
      assert.match(md, /\| Accepted submissions \| 1 \|/);
      assert.match(md, /## Problem/);
      assert.match(md, /Given an array of integers `nums`/);
      assert.match(md, /## Sample Test Case/);
      assert.match(md, /\[2,7,11,15\]/);
      assert.match(md, /## Example Test Cases/);
      assert.match(md, /\[3,2,4\]/);
      assert.match(md, /## Hints/);
      assert.match(md, /1\. Try using a hash map\./);
      assert.match(md, /## Submission History/);
      assert.match(md, /\[Accepted — C\+\+\]\(\.\/submissions\/001-accepted\.md\)/);
      assert.match(md, /\[Wrong Answer — Python3\]\(\.\/submissions\/002-wrong-answer\.md\)/);
    });
  });

  describe("generateSubmissionMarkdown", () => {
    const mockSubmission = {
      id: "2127645519",
      status: "Accepted",
      langName: "cpp",
      runtime: 8,
      memory: "14.8 MB",
      timestamp: 1788287758,
    };

    const mockDetails = {
      runtimeDisplay: "8 ms",
      runtimePercentile: 40.4,
      memoryDisplay: "14.8 MB",
      memoryPercentile: 44.6,
      code: "class Solution {};",
      lang: { name: "cpp", verboseName: "C++" },
      totalCorrect: 65,
      totalTestcases: 65,
      lastTestcase: "",
      codeOutput: "",
      expectedOutput: "",
      stdOutput: "",
    };

    it("should format submission details and code block", () => {
      const md = generateSubmissionMarkdown(mockSubmission, mockDetails, 1);

      assert.match(md, /# Attempt 1/);
      assert.match(md, /\| Submission ID \| 2127645519 \|/);
      assert.match(md, /\| Status \| Accepted \|/);
      assert.match(md, /\| Language \| cpp \|/);
      assert.match(md, /\| Language Version \| C\+\+ \|/);
      assert.match(md, /\| Runtime Display \| 8 ms \|/);
      assert.match(md, /\| Runtime Percentile \| 40\.4% \|/);
      assert.match(md, /```cpp\nclass Solution {};\n```/);
      assert.match(md, /- \*\*Correct:\*\* 65/);
      assert.match(md, /- \*\*Total testcases:\*\* 65/);
    });

    it("should include error details when present", () => {
      const errorDetails = {
        ...mockDetails,
        compileError: "syntax error on line 1",
        runtimeError: "NullPointerException",
        lastTestcase: "[1,2,3]",
        codeOutput: "0",
        expectedOutput: "1",
        stdOutput: "debug log",
      };

      const md = generateSubmissionMarkdown(mockSubmission, errorDetails, 2);

      assert.match(md, /## Compile Error\n\n```text\nsyntax error on line 1\n```/);
      assert.match(md, /## Runtime Error\n\n```text\nNullPointerException\n```/);
      assert.match(md, /## Last Testcase\n\n```text\n\[1,2,3\]\n```/);
      assert.match(md, /## Code Output\n\n```text\n0\n```/);
      assert.match(md, /## Expected Output\n\n```text\n1\n```/);
      assert.match(md, /## Standard Output\n\n```text\ndebug log\n```/);
    });
  });
});
