const fs = require("node:fs");
const path = require("node:path");
const { strictEqual } = require("node:assert");

const EXAMPLE_INPUT = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

function isSafeReport(levels) {
  if (levels.length < 2) return true;

  const diffs = [];
  for (let i = 1; i < levels.length; i++) {
    diffs.push(levels[i] - levels[i - 1]);
  }

  const isIncreasing = diffs.every((d) => d > 0);
  const isDecreasing = diffs.every((d) => d < 0);
  if (!isIncreasing && !isDecreasing) return false;

  return diffs.every((d) => {
    const abs = Math.abs(d);
    return abs >= 1 && abs <= 3;
  });
}

function countSafeReports(input) {
  const reports = input
    .trim()
    .split("\n")
    .filter((line) => line.trim().length > 0);

  return reports.reduce((count, line) => {
    const levels = line.trim().split(/\s+/).map(Number);
    return count + (isSafeReport(levels) ? 1 : 0);
  }, 0);
}

function verifyAgainstPuzzleExample() {
  strictEqual(
    countSafeReports(EXAMPLE_INPUT),
    2,
    "Puzzle example must produce exactly 2 safe reports"
  );
}

function main() {
  verifyAgainstPuzzleExample();

  const inputPath =
    process.argv[2] || path.join(__dirname, "input.txt");

  if (!fs.existsSync(inputPath)) {
    process.stderr.write(
      "No input file found. Save your puzzle input as `input.txt` in this folder, or run:\n" +
        "  node index.js path/to/input.txt\n" +
        "Self-check against the published example passed (2 safe reports).\n"
    );
    return;
  }

  const input = fs.readFileSync(inputPath, "utf8");
  process.stdout.write(String(countSafeReports(input)) + "\n");
}

if (require.main === module) {
  main();
}

module.exports = {
  isSafeReport,
  countSafeReports,
  EXAMPLE_INPUT,
};
