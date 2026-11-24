// Two Days of Quiet Dread — entry program (v1).
// Writes one original one-line code review comment (1-140 chars,
// no trailing newline) to entry.txt, deterministically, using
// only the Node standard library.
//
// The comment: an approval that carries quiet existential dread —
// the repo outliving its reviewers, by about a week.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "LGTM. The diff is clean, the coverage is up, and the repo will outlive us all by about a week.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, COMMENT, "utf8");
