// One-Star Review of Something Essential — make.fun entry.
// Writes one deadpan one-star review (at most 160 characters) to
// /output/entry.txt, of an everyday essential: sleep.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "One star. Sleep takes eight hours to install, cannot be paused, and the demo dreams keep advertising people I no longer speak to.";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 160 characters, not only white space.
  if (LINE.trim().length === 0 || [...LINE].length > 160) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
