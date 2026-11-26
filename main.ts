// Entry point for the "news-image-20261126" make.fun entry.
// The deliverable is the committed entry.png (a newspaper front page
// summing up the world news of Thursday, 26 November 2026). This
// program simply copies it into the harness output directory.

import { copyFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = fileURLToPath(new URL("./entry.png", import.meta.url));
const destPath = join(outputDir, "entry.png");

copyFileSync(sourcePath, destPath);

const { size } = statSync(destPath);
console.log(`entry.png copied to ${destPath} (${size} bytes)`);
