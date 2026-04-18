# Red-Nosed Reports - Code Challenge

This solution analyzes reactor safety reports and determines how many are "safe" based on defined constraints.

## Rules

A report is considered safe if:
- Levels are strictly increasing OR strictly decreasing
- Differences between adjacent levels are between 1 and 3 (inclusive)

## Approach

- Parse input into arrays of numbers
- Compute differences between adjacent values
- Check:
  - monotonic direction (all positive OR all negative)
  - valid difference range

## Tech

- JavaScript (Node.js)
- Functional array methods (`every`, `reduce`)

## Run

```bash
node index.js
