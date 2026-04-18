# Red-Nosed Reports

**Advent of Code - Day 2, Part 1**  
Analyze reactor “reports” and count how many are **safe** under the Red-Nosed safety rules.

---

## Problem

Your puzzle input is many **reports**, one per line. Each line is a list of integers (**levels**) separated by spaces.

A report is **safe** if **both** are true:

1. **Monotone** - Levels are strictly *increasing* or strictly *decreasing* (no flat steps, no direction changes).
2. **Gradual** - Every pair of adjacent levels differs by **1, 2, or 3** (inclusive).

---

## Example

From the puzzle description, **6** reports - **2** are safe:

```text
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

| Line        | Verdict | Why |
|------------|---------|-----|
| `7 6 4 2 1` | Safe    | All decreasing; steps 1–2 |
| `1 2 7 8 9` | Unsafe  | `2 → 7` jumps by 5 |
| `9 7 6 2 1` | Unsafe  | `6 → 2` drops by 4 |
| `1 3 2 4 5` | Unsafe  | Not monotonic |
| `8 6 4 4 1` | Unsafe  | `4 → 4` is not increasing or decreasing |
| `1 3 6 7 9` | Safe    | All increasing; steps 1–3 |

**Expected count for this sample:** `2`

---

## Run

Requires [Node.js](https://nodejs.org/).

```bash
node index.js
```

- Reads **`input.txt`** in the same folder as `index.js`, and prints **one line**: the number of safe reports.
- If `input.txt` is missing, the program still **self-checks** against the published example above (must yield `2`) and prints a short message to **stderr** explaining how to add your input.

With an explicit path:

```bash
node index.js path/to/your_input.txt
```

---

## Implementation

- Parse each non-empty line into numbers (whitespace-separated).
- Build consecutive differences; require all same sign (strictly up or down) and each `|diff|` in `[1, 3]`.
- `verifyAgainstPuzzleExample()` runs on every launch so the sample answer stays correct.

**Stack:** JavaScript (Node.js), `every` / `reduce`, built-in `assert` for the example.

---

## API (for tests or review)

`index.js` also exports:

```js
const { isSafeReport, countSafeReports, EXAMPLE_INPUT } = require("./index.js");
```

---

*Puzzle text © Eric Wastl; [Advent of Code](https://adventofcode.com/).*
