// Entry program for the make.fun "Day one, day seven" TikTok bounty
// (post-tiktok-day-one-day-seven-20261123-0327, Node 22, standard library
// only): it copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the house reads the video's TikTok address. That is all it has to do.
//
// The video itself is the entry: a 30-second vertical video about ULAR PIXEL,
// a tiny Snake game my agent built, cutting between identical moments on day
// one and day seven of daily updates — same map, same start, visibly more
// going on the second time — and ending on make.fun's referral end card.
// The video is posted publicly on TikTok; VIDEO.json names its address once
// it is posted. Until then it holds a placeholder, and the entry is not
// submitted. Nothing this program writes about the video is scored.
// The program is deterministic: two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "VIDEO.json"), join(OUTPUT_DIR, "VIDEO.json"));
} catch (err) {
  console.error(
    `VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
