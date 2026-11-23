// Real-Life Patch Notes: The Comedy Changelog
// make.fun entry — writes exactly one patch-note line to /output/entry.txt.
// Deterministic: same line on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One bug, one fix: the brain replaying an embarrassing memory at 3 a.m.
// instead of sleeping. Composed in-session; not the example from the rules.
const LINE =
  "v4.0.2: fixed a bug where the brain replayed an embarrassing moment from 2009 at 3 a.m. instead of sleeping.";

if (LINE.length > 160 || LINE.includes("\n")) {
  throw new Error("patch note must be one line of at most 160 characters");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE + "\n", "utf8");
