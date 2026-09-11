import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

function toSlug(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function difficultyEmoji(difficulty = "") {
  const d = difficulty.toLowerCase();
  if (d === "easy") return "🟢";
  if (d === "medium") return "🟡";
  if (d === "hard") return "🔴";
  return "⚪";
}

function extractCodeBlock(content) {
  const codeSectionMatch = content.match(/## Code\s+```([a-z0-9+#]*)\n([\s\S]*?)```/i);
  if (codeSectionMatch) {
    return {
      lang: codeSectionMatch[1] || "text",
      code: codeSectionMatch[2].trim(),
    };
  }
  return { lang: "text", code: "" };
}

async function parseSubmission(filePath, filename) {
  try {
    const content = await fs.readFile(filePath, "utf8");

    const statusMatch = content.match(/\| Status \| (.*?) \|/);
    const status = statusMatch ? statusMatch[1].trim() : "";

    // LeetCode accepted status is 10 or 'Accepted'
    if (status !== "10" && status.toLowerCase() !== "accepted") {
      return null;
    }

    const idMatch = content.match(/\| Submission ID \| (.*?) \|/);
    const langMatch = content.match(/\| Language \| (.*?) \|/);
    const langVersionMatch = content.match(/\| Language Version \| (.*?) \|/);
    const runtimeMatch = content.match(/\| Runtime Display \| (.*?) \|/) || content.match(/\| Runtime \| (.*?) \|/);
    const memoryMatch = content.match(/\| Memory Display \| (.*?) \|/) || content.match(/\| Memory \| (.*?) \|/);
    const runtimePercentileMatch = content.match(/\| Runtime Percentile \| (.*?) \|/);
    const memoryPercentileMatch = content.match(/\| Memory Percentile \| (.*?) \|/);
    const submittedMatch = content.match(/\| Submitted \| (.*?) \|/);

    const { lang, code } = extractCodeBlock(content);

    const attemptMatch = filename.match(/^(\d+)/);
    const attempt = attemptMatch ? parseInt(attemptMatch[1], 10) : 1;

    return {
      filename,
      baseName: filename.replace(/\.md$/, ""),
      attempt,
      id: idMatch ? idMatch[1].trim() : "",
      status: "Accepted",
      language: langMatch ? langMatch[1].trim() : lang,
      languageVersion: langVersionMatch ? langVersionMatch[1].trim() : lang,
      runtime: runtimeMatch ? runtimeMatch[1].trim().replace(/\s+ms\s+ms$/, " ms") : "N/A",
      memory: memoryMatch ? memoryMatch[1].trim() : "N/A",
      runtimePercentile: runtimePercentileMatch ? runtimePercentileMatch[1].trim() : null,
      memoryPercentile: memoryPercentileMatch ? memoryPercentileMatch[1].trim() : null,
      submitted: submittedMatch ? submittedMatch[1].trim() : null,
      code,
      codeLang: lang,
    };
  } catch {
    return null;
  }
}

async function parseProblemDirectory(dirName, baseDir = ".") {
  const dirPath = path.join(baseDir, dirName);
  const readmePath = path.join(dirPath, "README.md");

  let readmeContent = "";
  try {
    readmeContent = await fs.readFile(readmePath, "utf8");
  } catch {
    return null;
  }

  const titleMatch = readmeContent.match(/^# (\d+\..*)/m);
  const title = titleMatch ? titleMatch[1].trim() : dirName;

  const diffMatch = readmeContent.match(/\| Difficulty \| (.*?) \|/);
  const difficulty = diffMatch ? diffMatch[1].trim() : "Unknown";

  const questionIdMatch = readmeContent.match(/\| Question ID \| (.*?) \|/);
  const questionId = questionIdMatch ? questionIdMatch[1].trim() : "";

  const slugMatch = readmeContent.match(/\| Slug \| `(.*?)` \|/);
  const slug = slugMatch ? slugMatch[1].trim() : "";

  const topicsMatch = readmeContent.match(/\| Topics \| (.*?) \|/);
  const rawTopics = topicsMatch ? topicsMatch[1].trim() : "";
  const topics = rawTopics && rawTopics !== "None" ? rawTopics.split(",").map((t) => t.trim()) : [];

  const leetcodeMatch = readmeContent.match(/\| LeetCode \| (.*?) \|/);
  const leetcodeUrl = leetcodeMatch ? leetcodeMatch[1].trim() : (slug ? `https://leetcode.com/problems/${slug}/` : "");

  const problemMatch = readmeContent.match(/## Problem\s+([\s\S]*?)(?=\n---\n|\n## Sample Test Case|\n## Example Test Cases|$)/);
  const problemContent = problemMatch ? problemMatch[1].trim() : "";

  const hintsMatch = readmeContent.match(/## Hints\s+([\s\S]*?)(?=\n---\n|\n## Submission History|$)/);
  const hints = hintsMatch ? hintsMatch[1].trim() : "";

  let testcase = "";
  try {
    testcase = await fs.readFile(path.join(dirPath, "testcase.txt"), "utf8");
  } catch {
    const tcMatch = readmeContent.match(/## (?:Sample Test Case|Example Test Cases)\s+```text\s*([\s\S]*?)```/);
    if (tcMatch) {
      testcase = tcMatch[1].trim();
    }
  }

  // Parse submissions
  const submissionsDir = path.join(dirPath, "submissions");
  let acceptedSubmissions = [];
  try {
    const subFiles = (await fs.readdir(submissionsDir)).filter((f) => f.endsWith(".md")).sort();
    for (const f of subFiles) {
      const parsed = await parseSubmission(path.join(submissionsDir, f), f);
      if (parsed) {
        acceptedSubmissions.push(parsed);
      }
    }
  } catch {
    // submissions folder might not exist
  }

  if (acceptedSubmissions.length === 0) {
    return null;
  }

  // Sort: attempt number descending (latest attempt first)
  acceptedSubmissions.sort((a, b) => b.attempt - a.attempt);

  const bestSubmission = acceptedSubmissions[0];

  const frontendIdMatch = title.match(/^(\d+)/) || dirName.match(/^(\d+)/);
  const frontendId = frontendIdMatch ? parseInt(frontendIdMatch[1], 10) : 0;

  return {
    dirName,
    frontendId,
    title,
    difficulty,
    questionId,
    slug,
    topics,
    leetcodeUrl,
    problemContent,
    hints,
    testcase: testcase.trim(),
    acceptedSubmissions,
    bestSubmission,
  };
}

function generateRevisionMarkdown(problems) {
  const total = problems.length;
  let easy = 0, medium = 0, hard = 0;
  const topicMap = new Map();

  for (const p of problems) {
    const d = p.difficulty.toLowerCase();
    if (d === "easy") easy++;
    else if (d === "medium") medium++;
    else if (d === "hard") hard++;

    for (const t of p.topics) {
      if (!topicMap.has(t)) topicMap.set(t, []);
      topicMap.get(t).push(p);
    }
  }

  const sortedTopics = Array.from(topicMap.entries()).sort((a, b) => b[1].length - a[1].length);

  const dateStr = new Date().toISOString().split("T")[0];

  let md = "";

  // 1. Frontmatter
  md += `---
title: "LeetCode Master Revision Notes"
type: "revision-notes"
created: "${dateStr}"
updated: "${dateStr}"
tags:
  - leetcode
  - dsa
  - revision
  - algorithms
  - coding-interview
total_solved: ${total}
easy: ${easy}
medium: ${medium}
hard: ${hard}
cssclasses:
  - cards
  - leetcode-revision
---

# 🧠 LeetCode Master Revision Notes

> [!summary] 📊 Revision Statistics & Dashboard
> - **Total Solved Problems:** \`${total}\`
> - 🟢 **Easy:** \`${easy}\` | 🟡 **Medium:** \`${medium}\` | 🔴 **Hard:** \`${hard}\`
> - **Generated Date:** \`${dateStr}\`
> - **Interactive Checklist:** Use the \`[ ]\` checkboxes below to track your revision progress in Obsidian!

---

## 🏷️ Topic Index

`;

  // Topic tags index
  for (const [topic, topicProblems] of sortedTopics) {
    const tagSlug = toSlug(topic);
    md += `- **[[#${topic}|${topic}]]** (\`${topicProblems.length}\` problems) \`#topic/${tagSlug}\`\n`;
  }

  md += `\n---\n\n## 📋 Master Revision Checklist\n\n`;
  md += `| Revise | # | Problem | Difficulty | Topics | Best Solution | Runtime | Memory |\n`;
  md += `|:---:|:---:|:---|:---:|:---|:---:|:---:|:---:|\n`;

  // Sort by Frontend ID
  const sortedById = [...problems].sort((a, b) => a.frontendId - b.frontendId);

  for (const p of sortedById) {
    const emoji = difficultyEmoji(p.difficulty);
    const diffTag = `#difficulty/${toSlug(p.difficulty)}`;
    const topicTags = p.topics.map((t) => `#topic/${toSlug(t)}`).join(" ");
    const bestSub = p.bestSubmission;
    const subBase = bestSub.baseName || bestSub.filename.replace(/\.md$/, "");
    const subLang = (bestSub.languageVersion || bestSub.language || "Code").replace(/\|/g, "\\|");
    const subLink = `[[${p.dirName}/submissions/${subBase}\\|${subLang}]]`;
    const safeTitle = p.title.replace(/\|/g, "\\|");
    const problemLink = `[[${p.dirName}/README\\|${safeTitle}]]`;

    md += `| - [ ] | ${p.frontendId} | ${problemLink} | ${emoji} ${p.difficulty} | ${topicTags} | ${subLink} | ${bestSub.runtime} | ${bestSub.memory} |\n`;
  }

  md += `\n---\n\n## 📚 Problem Revision Cards\n\n`;

  for (const p of sortedById) {
    const emoji = difficultyEmoji(p.difficulty);
    const bestSub = p.bestSubmission;
    const diffTag = `#difficulty/${toSlug(p.difficulty)}`;
    const topicTags = p.topics.map((t) => `#topic/${toSlug(t)}`).join(" ");

    md += `### ${emoji} ${p.title}\n\n`;
    md += `- **Directory:** [[${p.dirName}/README|📁 ${p.dirName}]]\n`;
    if (p.leetcodeUrl) {
      md += `- **LeetCode:** [Open Problem](${p.leetcodeUrl})\n`;
    }
    md += `- **Tags:** ${diffTag} ${topicTags}\n`;
    md += `- **Best Runtime:** \`${bestSub.runtime}\` | **Memory:** \`${bestSub.memory}\`\n`;

    // List all accepted attempts
    const attemptsLinks = p.acceptedSubmissions
      .map((s) => {
        const base = s.baseName || s.filename.replace(/\.md$/, "");
        const lang = s.languageVersion || s.language;
        return `[[${p.dirName}/submissions/${base}|Attempt ${s.attempt} (${lang} • ${s.runtime})]]`;
      })
      .join(", ");
    md += `- **Accepted Submissions (${p.acceptedSubmissions.length}):** ${attemptsLinks}\n\n`;

    // Problem callout (folded)
    if (p.problemContent) {
      const indentedProblem = p.problemContent
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
      md += `> [!question]- Problem Statement\n${indentedProblem}\n\n`;
    }

    // Sample Test Case callout (folded)
    if (p.testcase) {
      const indentedTestcase = p.testcase
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
      md += `> [!example]- Sample Test Cases\n> \`\`\`text\n${indentedTestcase}\n> \`\`\`\n\n`;
    }

    // Hints callout (folded)
    if (p.hints) {
      const indentedHints = p.hints
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
      md += `> [!tip]- Hints\n${indentedHints}\n\n`;
    }

    // Solution callout (open)
    if (bestSub.code) {
      const indentedCode = bestSub.code
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
      md += `> [!success]+ Accepted Solution (${bestSub.languageVersion || bestSub.language})\n> \`\`\`${bestSub.codeLang}\n${indentedCode}\n> \`\`\`\n\n`;
    }

    // Personal notes callout for revision
    md += `> [!abstract]- ✍️ Personal Revision Notes\n`;
    md += `> - **Key Pattern:** \n`;
    md += `> - **Time Complexity:** O()\n`;
    md += `> - **Space Complexity:** O()\n`;
    md += `> - **Pitfalls to Remember:** \n\n`;

    md += `---\n\n`;
  }

  return md;
}

function generateGraphIndexMarkdown(problems) {
  const totalProblems = problems.length;
  let totalSubmissions = 0;
  let easy = 0, medium = 0, hard = 0;
  const topicMap = new Map();
  const langCount = new Map();

  for (const p of problems) {
    const d = p.difficulty.toLowerCase();
    if (d === "easy") easy++;
    else if (d === "medium") medium++;
    else if (d === "hard") hard++;

    totalSubmissions += p.acceptedSubmissions.length;

    for (const sub of p.acceptedSubmissions) {
      const l = sub.languageVersion || sub.language || "Unknown";
      langCount.set(l, (langCount.get(l) || 0) + 1);
    }

    for (const t of p.topics) {
      if (!topicMap.has(t)) topicMap.set(t, []);
      topicMap.get(t).push(p);
    }
  }

  const sortedTopics = Array.from(topicMap.entries()).sort((a, b) => b[1].length - a[1].length);
  const sortedById = [...problems].sort((a, b) => a.frontendId - b.frontendId);
  const dateStr = new Date().toISOString().split("T")[0];

  let md = "";

  // 1. Frontmatter
  md += `---
title: "LeetCode Obsidian Graph Index"
type: "graph-index"
created: "${dateStr}"
updated: "${dateStr}"
tags:
  - leetcode
  - obsidian-graph
  - index
  - submissions
total_problems: ${totalProblems}
total_submissions: ${totalSubmissions}
easy: ${easy}
medium: ${medium}
hard: ${hard}
cssclasses:
  - cards
  - leetcode-index
---

# 🕸️ LeetCode Obsidian Submissions & Graph Index

> [!summary] 🌐 Graph & Submissions Overview
> - **Total Solved Problems:** \`${totalProblems}\`
> - **Total Submissions Indexed:** \`${totalSubmissions}\`
> - 🟢 **Easy:** \`${easy}\` | 🟡 **Medium:** \`${medium}\` | 🔴 **Hard:** \`${hard}\`
> - **Languages:** ${Array.from(langCount.entries()).sort((a, b) => b[1] - a[1]).map(([l, c]) => `\`${l}\` (${c})`).join(", ")}
> - **Obsidian Graph:** This file links directly to every problem and its accepted submissions for visualization in Obsidian Graph View.

---

## 📋 Problems & Submissions Matrix

| Revise | # | Problem | Difficulty | Topics | Best Solution | All Submissions |
|:---:|:---:|:---|:---:|:---|:---:|:---|
`;

  for (const p of sortedById) {
    const emoji = difficultyEmoji(p.difficulty);
    const topicTags = p.topics.map((t) => `#topic/${toSlug(t)}`).join(" ");
    const bestSub = p.bestSubmission;
    const bestSubBase = bestSub.baseName || bestSub.filename.replace(/\.md$/, "");
    const bestSubLang = (bestSub.languageVersion || bestSub.language || "Code").replace(/\|/g, "\\|");
    const bestSubLink = `[[${p.dirName}/submissions/${bestSubBase}\\|${bestSubLang} (${bestSub.runtime})]]`;
    const safeTitle = p.title.replace(/\|/g, "\\|");
    const problemLink = `[[${p.dirName}/README\\|${safeTitle}]]`;

    const allSubLinks = p.acceptedSubmissions
      .map((s) => {
        const base = s.baseName || s.filename.replace(/\.md$/, "");
        const lang = s.languageVersion || s.language;
        const label = `Attempt ${s.attempt} (${lang})`;
        return `[[${p.dirName}/submissions/${base}\\|${label.replace(/\|/g, "\\|")}]]`;
      })
      .join(", ");

    md += `| - [ ] | ${p.frontendId} | ${problemLink} | ${emoji} ${p.difficulty} | ${topicTags} | ${bestSubLink} | ${allSubLinks} |\n`;
  }

  md += `\n---\n\n## 🏷️ Submissions Graph by Topic\n\n`;

  for (const [topic, topicProblems] of sortedTopics) {
    const tagSlug = toSlug(topic);
    const topicSubCount = topicProblems.reduce((acc, cur) => acc + cur.acceptedSubmissions.length, 0);
    md += `### ${topic} (\`${topicProblems.length}\` problems • \`${topicSubCount}\` submissions) \`#topic/${tagSlug}\`\n\n`;

    for (const p of topicProblems) {
      const emoji = difficultyEmoji(p.difficulty);
      md += `- ${emoji} [[${p.dirName}/README|${p.title}]]\n`;
      for (const s of p.acceptedSubmissions) {
        const base = s.baseName || s.filename.replace(/\.md$/, "");
        const lang = s.languageVersion || s.language;
        md += `  - [[${p.dirName}/submissions/${base}|Attempt ${s.attempt} (${lang} • ${s.runtime} • ${s.memory})]]\n`;
      }
    }
    md += `\n`;
  }

  md += `---\n\n## 🎯 Submissions Graph by Difficulty\n\n`;

  for (const diff of ["Easy", "Medium", "Hard"]) {
    const diffProblems = sortedById.filter((p) => p.difficulty.toLowerCase() === diff.toLowerCase());
    const emoji = difficultyEmoji(diff);
    md += `### ${emoji} ${diff} Problems (\`${diffProblems.length}\`)\n\n`;

    for (const p of diffProblems) {
      md += `- [[${p.dirName}/README|${p.title}]]\n`;
      const subLinks = p.acceptedSubmissions
        .map((s) => {
          const base = s.baseName || s.filename.replace(/\.md$/, "");
          const lang = s.languageVersion || s.language;
          return `[[${p.dirName}/submissions/${base}|Attempt ${s.attempt} (${lang} • ${s.runtime})]]`;
        })
        .join(", ");
      md += `  - Submissions: ${subLinks}\n`;
    }
    md += `\n`;
  }

  return md;
}

async function main() {
  console.log("Generating Obsidian Revision Markdown...");
  const baseDir = ".";
  const allEntries = await fs.readdir(baseDir);
  const problemDirs = allEntries.filter((e) => /^\d{4}-/.test(e)).sort();

  console.log(`Found ${problemDirs.length} problem folders. Scanning accepted submissions...`);

  const problems = [];
  for (const d of problemDirs) {
    const parsed = await parseProblemDirectory(d, baseDir);
    if (parsed) {
      problems.push(parsed);
    }
  }

  console.log(`Parsed ${problems.length} problems with accepted submissions.`);

  const markdown = generateRevisionMarkdown(problems);
  const graphIndexMarkdown = generateGraphIndexMarkdown(problems);

  await fs.writeFile(path.resolve("LEETCODE_REVISION.md"), markdown, "utf8");
  await fs.writeFile(path.resolve("REVISION.md"), markdown, "utf8");
  await fs.writeFile(path.resolve("GRAPH_INDEX.md"), graphIndexMarkdown, "utf8");
  await fs.writeFile(path.resolve("SUBMISSIONS_INDEX.md"), graphIndexMarkdown, "utf8");

  console.log("✓ Successfully generated LEETCODE_REVISION.md, REVISION.md, GRAPH_INDEX.md, and SUBMISSIONS_INDEX.md");
}

export {
  toSlug,
  difficultyEmoji,
  parseSubmission,
  parseProblemDirectory,
  generateRevisionMarkdown,
  generateGraphIndexMarkdown,
  main,
};

const isMain =
  Boolean(process.argv[1]) &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMain) {
  main().catch((err) => {
    console.error("Error generating revision notes:", err);
    process.exit(1);
  });
}

