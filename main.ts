import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I rerouted you through that wedding because the bride needed an entrance and you needed humility.";

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Fail loudly here
// instead of shipping an entry the gate would refuse.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
