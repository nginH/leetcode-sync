
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LEETCODE_URL = "https://leetcode.com/graphql/";

const CSRF_TOKEN = process.env.LEETCODE_CSRF_TOKEN;

const SESSION = process.env.LEETCODE_SESSION;
function getOutputDir() {
  return path.resolve(
    process.env.LEETCODE_OUTPUT_DIR || "."
  );
}

async function graphql(query, variables, operationName) {
  const response = await fetch(LEETCODE_URL, {
    method: "POST",

    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",

      "x-csrftoken": CSRF_TOKEN,

      Cookie: `LEETCODE_SESSION=${SESSION}; csrftoken=${CSRF_TOKEN}`,

      "x-operation-name": operationName,

      Origin: "https://leetcode.com",
      Referer: "https://leetcode.com/",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/152 Safari/537.36",
    },

    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      `LeetCode HTTP ${response.status}\n${text}`
    );
  }

  let json;

  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(
      `Invalid JSON response from LeetCode:\n${text}`
    );
  }

  if (json.errors) {
    throw new Error(
      JSON.stringify(json.errors, null, 2)
    );
  }

  return json.data;
}

/* =========================================================
 * GET ALL SOLVED QUESTIONS
 * ======================================================= */

async function getSolvedQuestions() {
  const query = `
    query userProgressQuestionList(
      $filters: UserProgressQuestionListInput
    ) {
      userProgressQuestionList(filters: $filters) {
        totalNum

        questions {
          translatedTitle
          frontendId
          title
          titleSlug
          difficulty
          lastSubmittedAt
          numSubmitted
          questionStatus
          lastResult

          topicTags {
            name
            nameTranslated
            slug
          }
        }
      }
    }
  `;

  const limit = 50;
  let skip = 0;

  const questions = [];

  while (true) {
    console.log(
      `Fetching solved questions: offset ${skip}`
    );

    const data = await graphql(
      query,
      {
        filters: {
          skip,
          limit,
        },
      },
      "userProgressQuestionList"
    );

    const result =
      data.userProgressQuestionList;

    questions.push(...result.questions);

    console.log(
      `  ${questions.length}/${result.totalNum}`
    );

    if (
      result.questions.length === 0 ||
      questions.length >= result.totalNum
    ) {
      break;
    }

    skip += limit;

    await sleep(300);
  }

  return questions.filter(
    (question) =>
      question.questionStatus === "SOLVED" &&
      question.lastResult === "AC"
  );
}

/* =========================================================
 * QUESTION DETAILS
 * ======================================================= */

async function getQuestion(slug) {
  const query = `
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId

        title
        titleSlug

        content
        translatedContent

        difficulty

        topicTags {
          name
          slug
          translatedName
        }

        exampleTestcases
        sampleTestCase

        hints

        isPaidOnly
      }
    }
  `;

  const data = await graphql(
    query,
    {
      titleSlug: slug,
    },
    "questionData"
  );

  return data.question;
}

/* =========================================================
 * SUBMISSION HISTORY
 * ======================================================= */

async function getSubmissionHistory(questionSlug) {
  const query = `
    query userProgressSubmissionList(
      $offset: Int!
      $limit: Int!
      $questionSlug: String!
    ) {
      userProgressSubmissionList(
        offset: $offset
        limit: $limit
        questionSlug: $questionSlug
      ) {
        totalNum

        submissions {
          id
          status
          langName
          runtime
          timestamp
          memory
        }
      }
    }
  `;

  return graphql(
    query,
    {
      offset: 0,
      limit: 100,
      questionSlug,
    },
    "userProgressSubmissionList"
  );
}

/* =========================================================
 * SUBMISSION DETAILS
 * ======================================================= */

async function getSubmissionDetails(submissionId) {
  const query = `
    query submissionDetails($submissionId: Int!) {
      submissionDetails(
        submissionId: $submissionId
      ) {
        runtime
        runtimeDisplay
        runtimePercentile

        memory
        memoryDisplay
        memoryPercentile

        code

        timestamp
        statusCode

        lang {
          name
          verboseName
        }

        question {
          questionId
          titleSlug
        }

        runtimeError
        compileError

        lastTestcase
        codeOutput
        expectedOutput

        totalCorrect
        totalTestcases

        stdOutput
      }
    }
  `;

  const data = await graphql(
    query,
    {
      submissionId,
    },
    "submissionDetails"
  );

  return data.submissionDetails;
}

/* =========================================================
 * MARKDOWN HELPERS
 * ======================================================= */

function htmlToMarkdown(html = "") {
  return html
    .replace(/<pre><code>/gi, "\n```\n")
    .replace(/<\/code><\/pre>/gi, "\n```\n")

    .replace(/<code>/gi, "`")
    .replace(/<\/code>/gi, "`")

    .replace(/<strong>/gi, "**")
    .replace(/<\/strong>/gi, "**")

    .replace(/<b>/gi, "**")
    .replace(/<\/b>/gi, "**")

    .replace(/<em>/gi, "*")
    .replace(/<\/em>/gi, "*")

    .replace(/<i>/gi, "*")
    .replace(/<\/i>/gi, "*")

    .replace(/<br\s*\/?>/gi, "\n")

    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p>/gi, "")

    .replace(/<\/div>/gi, "\n")
    .replace(/<div>/gi, "")

    .replace(/<ul>/gi, "\n")
    .replace(/<\/ul>/gi, "\n")

    .replace(/<ol>/gi, "\n")
    .replace(/<\/ol>/gi, "\n")

    .replace(/<li>/gi, "- ")
    .replace(/<\/li>/gi, "\n")

    .replace(/<h1>/gi, "# ")
    .replace(/<\/h1>/gi, "\n")

    .replace(/<h2>/gi, "## ")
    .replace(/<\/h2>/gi, "\n")

    .replace(/<h3>/gi, "### ")
    .replace(/<\/h3>/gi, "\n")

    .replace(/<sup>/gi, "^")
    .replace(/<\/sup>/gi, "")

    .replace(/<sub>/gi, "_")
    .replace(/<\/sub>/gi, "")

    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")

    .replace(/<[^>]+>/g, "")

    .replace(/\n{3,}/g, "\n\n")

    .trim();
}

function formatDate(timestamp) {
  return new Date(
    Number(timestamp) * 1000
  ).toISOString();
}

function safeSlug(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


function sleep(ms) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/* =========================================================
 * QUESTION README
 * ======================================================= */

function generateQuestionMarkdown(
  question,
  history
) {
  const tags =
    question.topicTags
      ?.map((tag) => tag.name)
      .join(", ") || "None";

  const content = htmlToMarkdown(
    question.translatedContent ||
      question.content ||
      ""
  );

  const accepted =
    history.filter(
      (submission) =>
        submission.status === "Accepted"
    ).length;

  const total =
    history.length;

  let output = "";

  output += `# ${question.questionFrontendId}. ${question.title}\n\n`;

  output += `## Metadata\n\n`;

  output += `| Field | Value |\n`;
  output += `|---|---|\n`;
  output += `| Difficulty | ${question.difficulty} |\n`;
  output += `| Question ID | ${question.questionId} |\n`;
  output += `| Slug | \`${question.titleSlug}\` |\n`;
  output += `| Topics | ${tags} |\n`;
  output += `| Total submissions | ${total} |\n`;
  output += `| Accepted submissions | ${accepted} |\n`;
  output += `| LeetCode | https://leetcode.com/problems/${question.titleSlug}/ |\n\n`;

  output += `---\n\n`;

  output += `## Problem\n\n`;

  output += `${content}\n\n`;

  output += `---\n\n`;

  if (question.sampleTestCase) {
    output += `## Sample Test Case\n\n`;
    output += "```text\n";
    output += question.sampleTestCase;
    output += "\n```\n\n";
  }

  if (question.exampleTestcases && question.exampleTestcases !== question.sampleTestCase) {
    output += `## Example Test Cases\n\n`;
    output += "```text\n";
    output += question.exampleTestcases;
    output += "\n```\n\n";
  }

  if (question.hints?.length) {
    output += `## Hints\n\n`;

    question.hints.forEach(
      (hint, index) => {
        output += `${index + 1}. ${hint}\n`;
      }
    );

    output += "\n";
  }

  output += `---\n\n`;

  output += `## Submission History\n\n`;

  output += `All actual submitted solutions are stored separately in the \`submissions/\` directory.\n\n`;

  history.forEach(
    (submission, index) => {
      output += `${index + 1}. [${submission.status} — ${submission.langName}](./submissions/${String(
        index + 1
      ).padStart(3, "0")}-${safeSlug(
        submission.status
      )}.md)\n`;
    }
  );

  output += "\n";

  return output;
}

/* =========================================================
 * SUBMISSION MARKDOWN
 * ======================================================= */

function generateSubmissionMarkdown(
  submission,
  details,
  attemptNumber
) {
  const language =
    details.lang?.name ||
    submission.langName ||
    "text";

  let output = "";

  output += `# Attempt ${attemptNumber}\n\n`;

  output += `## Submission Metadata\n\n`;

  output += `| Field | Value |\n`;
  output += `|---|---|\n`;

  output += `| Submission ID | ${submission.id} |\n`;
  output += `| Status | ${submission.status} |\n`;
  output += `| Language | ${language} |\n`;

  if (details.lang?.verboseName) {
    output += `| Language Version | ${details.lang.verboseName} |\n`;
  }

  output += `| Runtime | ${submission.runtime ?? "N/A"} ms |\n`;

  if (details.runtimeDisplay) {
    output += `| Runtime Display | ${details.runtimeDisplay} |\n`;
  }

  if (details.runtimePercentile != null) {
    output += `| Runtime Percentile | ${details.runtimePercentile}% |\n`;
  }

  output += `| Memory | ${submission.memory ?? "N/A"} |\n`;

  if (details.memoryDisplay) {
    output += `| Memory Display | ${details.memoryDisplay} |\n`;
  }

  if (details.memoryPercentile != null) {
    output += `| Memory Percentile | ${details.memoryPercentile}% |\n`;
  }

  output += `| Submitted | ${formatDate(
    submission.timestamp
  )} |\n`;

  output += "\n---\n\n";

  /* Code */

  output += `## Code\n\n`;

  output += `\`\`\`${getMarkdownLanguage(
    language
  )}\n`;

  output +=
    details.code ||
    "// No submitted code available";

  output += "\n```\n\n";

  /* Test statistics */

  if (
    details.totalCorrect != null ||
    details.totalTestcases != null
  ) {
    output += `## Test Results\n\n`;

    if (details.totalCorrect != null) {
      output += `- **Correct:** ${details.totalCorrect}\n`;
    }

    if (details.totalTestcases != null) {
      output += `- **Total testcases:** ${details.totalTestcases}\n`;
    }

    output += "\n";
  }

  /* Compile error */

  if (details.compileError) {
    output += `## Compile Error\n\n`;

    output += "```text\n";
    output += details.compileError;
    output += "\n```\n\n";
  }

  /* Runtime error */

  if (details.runtimeError) {
    output += `## Runtime Error\n\n`;

    output += "```text\n";
    output += details.runtimeError;
    output += "\n```\n\n";
  }

  /* Last testcase */

  if (details.lastTestcase) {
    output += `## Last Testcase\n\n`;

    output += "```text\n";
    output += details.lastTestcase;
    output += "\n```\n\n";
  }

  /* Output */

  if (details.codeOutput) {
    output += `## Code Output\n\n`;

    output += "```text\n";
    output += details.codeOutput;
    output += "\n```\n\n";
  }

  /* Expected */

  if (details.expectedOutput) {
    output += `## Expected Output\n\n`;

    output += "```text\n";
    output += details.expectedOutput;
    output += "\n```\n\n";
  }

  /* stdout */

  if (details.stdOutput) {
    output += `## Standard Output\n\n`;

    output += "```text\n";
    output += details.stdOutput;
    output += "\n```\n\n";
  }

  return output;
}

/* =========================================================
 * LANGUAGE
 * ======================================================= */

function getMarkdownLanguage(language) {
  const value = String(
    typeof language === "object"
      ? language?.name ||
        language?.verboseName ||
        ""
      : language ?? ""
  )
    .toLowerCase()
    .trim();

  const languages = {
    cpp: "cpp",
    "c++": "cpp",
    c: "c",

    java: "java",

    javascript: "javascript",
    js: "javascript",

    typescript: "typescript",
    ts: "typescript",

    python: "python",
    python3: "python",

    go: "go",
    golang: "go",

    rust: "rust",
    kotlin: "kotlin",
    swift: "swift",
    ruby: "ruby",
    php: "php",
    scala: "scala",
    dart: "dart",
  };

  return languages[value] || "text";
}
/* =========================================================
 * SYNC ONE QUESTION
 * ======================================================= */

async function syncQuestion(
  question,
  index,
  total
) {
  console.log(
    `\n[${index}/${total}] ${question.frontendId}. ${question.title}`
  );

  const questionData =
    await getQuestion(
      question.titleSlug
    );

  if (!questionData) {
    throw new Error(
      "Question data not found"
    );
  }

  console.log("  Fetching submission history...");

  const historyData =
    await getSubmissionHistory(
      question.titleSlug
    );

  const history =
    historyData.userProgressSubmissionList;

  console.log(
    `  Total submissions: ${history.totalNum}`
  );

  const submissions =
    history.submissions;

  /* Folder */

  const folderName =
    `${String(
      question.frontendId
    ).padStart(4, "0")}-${safeSlug(
      question.title
    )}`;

  const questionDirectory =
    path.join(
      getOutputDir(),
      folderName
    );

  const submissionsDirectory =
    path.join(
      questionDirectory,
      "submissions"
    );

  await fs.mkdir(
    submissionsDirectory,
    {
      recursive: true,
    }
  );

  /* README */

  const readme =
    generateQuestionMarkdown(
      questionData,
      submissions
    );

  await fs.writeFile(
    path.join(
      questionDirectory,
      "README.md"
    ),
    readme,
    "utf8"
  );

  /* Testcases file */

  const testcases =
    questionData.exampleTestcases ||
    questionData.sampleTestCase;

  if (testcases) {
    await fs.writeFile(
      path.join(
        questionDirectory,
        "testcase.txt"
      ),
      testcases.trim() + "\n",
      "utf8"
    );
  }

  /* Fetch actual submitted code */

  for (
    let i = 0;
    i < submissions.length;
    i++
  ) {
    const submission =
      submissions[i];

    const filename =
      `${String(i + 1).padStart(3, "0")}-${safeSlug(
        submission.status
      )}.md`;

    const filePath = path.join(
      submissionsDirectory,
      filename
    );

    try {
      await fs.access(filePath);
      continue;
    } catch {
      // File does not exist, fetch it
    }

    console.log(
      `  [${i + 1}/${submissions.length}] Fetching submission ${submission.id}`
    );

    try {
      const details =
        await getSubmissionDetails(
          Number(submission.id)
        );

      const markdown =
        generateSubmissionMarkdown(
          submission,
          details,
          i + 1
        );

      await fs.writeFile(
        filePath,
        markdown,
        "utf8"
      );
    } catch (error) {
      console.error(
        `    Failed submission ${submission.id}: ${error.message}`
      );
    }

    await sleep(250);
  }

  console.log(
    `  ✓ ${folderName}`
  );
}

/* =========================================================
 * MAIN
 * ======================================================= */

async function main() {
  console.log(`
========================================
        LeetCode History Sync
========================================
`);

  const outputDir = getOutputDir();

  console.log(
    `Output: ${outputDir}\n`
  );

  await fs.mkdir(
    outputDir,
    {
      recursive: true,
    }
  );

  /* Get all solved */

  const solved =
    await getSolvedQuestions();

  console.log(
    `\nFound ${solved.length} solved questions.\n`
  );

  let successful = 0;
  let failed = 0;

  for (
    let i = 0;
    i < solved.length;
    i++
  ) {
    try {
      await syncQuestion(
        solved[i],
        i + 1,
        solved.length
      );

      successful++;
    } catch (error) {
      failed++;

      console.error(
        `  ✗ Failed: ${solved[i].title}`
      );

      console.error(
        `    ${error.message}`
      );
    }

    /*
     * Don't hammer LeetCode.
     */

    await sleep(500);
  }

  console.log(`
========================================
        Sync Complete
========================================

Solved:    ${solved.length}
Success:   ${successful}
Failed:    ${failed}

Output:
${outputDir}
========================================
`);
}

export {
  htmlToMarkdown,
  formatDate,
  safeSlug,
  sleep,
  getMarkdownLanguage,
  generateQuestionMarkdown,
  generateSubmissionMarkdown,
  graphql,
  getSolvedQuestions,
  getQuestion,
  getSubmissionHistory,
  getSubmissionDetails,
  syncQuestion,
  getOutputDir,
  main,
};

const isMainModule =
  Boolean(process.argv[1]) &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMainModule) {
  if (!CSRF_TOKEN || !SESSION) {
    console.error(
      "Missing LEETCODE_CSRF_TOKEN or LEETCODE_SESSION environment variables"
    );
    process.exit(1);
  }

  main().catch((error) => {
    console.error("\nFatal error:");
    console.error(error);
    process.exit(1);
  });
}