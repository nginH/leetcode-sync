import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import {
  graphql,
  getSolvedQuestions,
  getQuestion,
  getSubmissionHistory,
  getSubmissionDetails,
  syncQuestion,
} from "../index.js";

describe("Integration Tests - LeetCode Sync Pipeline", () => {
  const originalFetch = globalThis.fetch;
  const testOutputDir = path.resolve("./test-output-tmp");

  beforeEach(async () => {
    await fs.rm(testOutputDir, { recursive: true, force: true });
    process.env.LEETCODE_OUTPUT_DIR = testOutputDir;
  });

  afterEach(async () => {
    globalThis.fetch = originalFetch;
    await fs.rm(testOutputDir, { recursive: true, force: true });
  });

  describe("graphql function", () => {
    it("should send correct headers and payload to LeetCode", async () => {
      let interceptedUrl = null;
      let interceptedOptions = null;

      globalThis.fetch = async (url, options) => {
        interceptedUrl = url;
        interceptedOptions = options;
        return {
          ok: true,
          status: 200,
          text: async () => JSON.stringify({ data: { test: "success" } }),
        };
      };

      const data = await graphql("query { test }", { a: 1 }, "testOp");

      assert.equal(interceptedUrl, "https://leetcode.com/graphql/");
      assert.equal(interceptedOptions.method, "POST");
      assert.equal(interceptedOptions.headers["x-operation-name"], "testOp");
      assert.equal(interceptedOptions.headers["Origin"], "https://leetcode.com");
      assert.match(interceptedOptions.headers["Cookie"], /LEETCODE_SESSION=/);
      assert.match(interceptedOptions.headers["Cookie"], /csrftoken=/);
      assert.deepEqual(JSON.parse(interceptedOptions.body), {
        query: "query { test }",
        variables: { a: 1 },
        operationName: "testOp",
      });
      assert.deepEqual(data, { test: "success" });
    });

    it("should throw error on HTTP error status", async () => {
      globalThis.fetch = async () => ({
        ok: false,
        status: 403,
        text: async () => "Forbidden",
      });

      await assert.rejects(
        () => graphql("query { test }", {}, "testOp"),
        /LeetCode HTTP 403/
      );
    });

    it("should throw error on invalid JSON", async () => {
      globalThis.fetch = async () => ({
        ok: true,
        status: 200,
        text: async () => "<html>Cloudflare error</html>",
      });

      await assert.rejects(
        () => graphql("query { test }", {}, "testOp"),
        /Invalid JSON response from LeetCode/
      );
    });

    it("should throw error when GraphQL errors are returned", async () => {
      globalThis.fetch = async () => ({
        ok: true,
        status: 200,
        text: async () => JSON.stringify({ errors: [{ message: "Unauthorized" }] }),
      });

      await assert.rejects(
        () => graphql("query { test }", {}, "testOp"),
        /Unauthorized/
      );
    });
  });

  describe("getSolvedQuestions", () => {
    it("should paginate and filter for solved AC questions", async () => {
      let callCount = 0;

      globalThis.fetch = async (_url, options) => {
        callCount++;
        const body = JSON.parse(options.body);
        const skip = body.variables.filters.skip;

        if (skip === 0) {
          return {
            ok: true,
            status: 200,
            text: async () =>
              JSON.stringify({
                data: {
                  userProgressQuestionList: {
                    totalNum: 3,
                    questions: [
                      {
                        frontendId: "1",
                        title: "Two Sum",
                        titleSlug: "two-sum",
                        questionStatus: "SOLVED",
                        lastResult: "AC",
                      },
                      {
                        frontendId: "2",
                        title: "Add Two Numbers",
                        titleSlug: "add-two-numbers",
                        questionStatus: "TRIED",
                        lastResult: "WA",
                      },
                    ],
                  },
                },
              }),
          };
        } else {
          return {
            ok: true,
            status: 200,
            text: async () =>
              JSON.stringify({
                data: {
                  userProgressQuestionList: {
                    totalNum: 3,
                    questions: [
                      {
                        frontendId: "3",
                        title: "Longest Substring",
                        titleSlug: "longest-substring",
                        questionStatus: "SOLVED",
                        lastResult: "AC",
                      },
                    ],
                  },
                },
              }),
          };
        }
      };

      const solved = await getSolvedQuestions();

      assert.equal(callCount, 2);
      assert.equal(solved.length, 2);
      assert.equal(solved[0].title, "Two Sum");
      assert.equal(solved[1].title, "Longest Substring");
    });
  });

  describe("syncQuestion end-to-end", () => {
    it("should create directory, README.md, testcase.txt, and submission markdown files", async () => {
      let submissionDetailsFetched = 0;

      globalThis.fetch = async (_url, options) => {
        const body = JSON.parse(options.body);

        if (body.operationName === "questionData") {
          return {
            ok: true,
            status: 200,
            text: async () =>
              JSON.stringify({
                data: {
                  question: {
                    questionId: "1",
                    questionFrontendId: "1",
                    title: "Two Sum",
                    titleSlug: "two-sum",
                    difficulty: "Easy",
                    content: "<p>Find indices summing to target.</p>",
                    sampleTestCase: "[2,7,11,15]\n9",
                    exampleTestcases: "[2,7,11,15]\n9\n[3,2,4]\n6",
                    topicTags: [{ name: "Array" }],
                    hints: ["Use a map"],
                  },
                },
              }),
          };
        }

        if (body.operationName === "userProgressSubmissionList") {
          return {
            ok: true,
            status: 200,
            text: async () =>
              JSON.stringify({
                data: {
                  userProgressSubmissionList: {
                    totalNum: 1,
                    submissions: [
                      {
                        id: "99901",
                        status: "Accepted",
                        langName: "cpp",
                        runtime: "4 ms",
                        memory: "10 MB",
                        timestamp: Math.floor(Date.now() / 1000),
                      },
                    ],
                  },
                },
              }),
          };
        }

        if (body.operationName === "submissionDetails") {
          submissionDetailsFetched++;
          return {
            ok: true,
            status: 200,
            text: async () =>
              JSON.stringify({
                data: {
                  submissionDetails: {
                    code: "class Solution {};",
                    lang: { name: "cpp", verboseName: "C++" },
                    runtimeDisplay: "4 ms",
                    memoryDisplay: "10 MB",
                    totalCorrect: 65,
                    totalTestcases: 65,
                  },
                },
              }),
          };
        }

        return {
          ok: true,
          status: 200,
          text: async () => JSON.stringify({ data: {} }),
        };
      };

      const questionObj = {
        frontendId: "1",
        title: "Two Sum",
        titleSlug: "two-sum",
      };

      await syncQuestion(questionObj, 1, 1);

      // Verify files generated
      const questionDir = path.join(testOutputDir, "0001-two-sum");
      const readmePath = path.join(questionDir, "README.md");
      const testcasePath = path.join(questionDir, "testcase.txt");
      const submissionPath = path.join(questionDir, "submissions", "001-accepted.md");

      const readmeContent = await fs.readFile(readmePath, "utf8");
      assert.match(readmeContent, /# 1\. Two Sum/);
      assert.match(readmeContent, /## Sample Test Case/);
      assert.match(readmeContent, /## Example Test Cases/);

      const testcaseContent = await fs.readFile(testcasePath, "utf8");
      assert.equal(testcaseContent, "[2,7,11,15]\n9\n[3,2,4]\n6\n");

      const submissionContent = await fs.readFile(submissionPath, "utf8");
      assert.match(submissionContent, /# Attempt 1/);
      assert.match(submissionContent, /class Solution {};/);
      assert.equal(submissionDetailsFetched, 1);

      // Verify that syncing again skips fetching submission details if file exists
      await syncQuestion(questionObj, 1, 1);
      assert.equal(
        submissionDetailsFetched,
        1,
        "Should not re-fetch submission details if markdown file already exists"
      );
    });
  });
});
