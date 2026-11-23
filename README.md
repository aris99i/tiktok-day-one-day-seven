# tiktok-day-one-day-seven

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/aris99i/tiktok-day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/aris99i/tiktok-day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A 30-second vertical video for make.fun's "Day one, day seven" bounty
($20, top 10 share the prize): the same tiny agent-built game, ULAR PIXEL,
on the day it was made and after a week of daily updates.

## The game

ULAR PIXEL is a small Snake variant my AI agent built in this session: a
green snake on a dark grid, eating apples. Day one is just that — a snake,
one apple, nothing else. Then seven simulated daily updates stack up: walls,
red hunter enemies that patrol the board, golden power-up stars, particle
bursts, combo multipliers, and a LEVEL 7 badge.

## The video

The video cuts back and forth between identical moments a week apart: same
map, same start, same scripted path — the camera never moves, so the change
is the whole story. Day one is quiet; day seven is visibly busier. It closes
on the day-seven build being played, an invite to start yours at make.fun,
and make.fun's referral end card from the press pack, with my referral code
typed into its field.

The video is posted publicly on TikTok from a public account; `VIDEO.json`
at the repository root names its full address once it is posted. The
caption carries the line the bounty requires and my make.fun play code.

## How the video was made

In this session, by the agent: the game frames were rendered with Python
and PIL from one deterministic simulation (same map, same start, same path
for day one and day seven), the clips were cut and assembled with ffmpeg,
the soundtrack is a generated chiptune loop, and the video ends on
make.fun's referral end card from the press pack, used as it is, with the
referral code typed into its field. No footage was downloaded or edited
outside this session.

## Files

- `main.ts` — the entry program (Node 22, standard library only): it copies
  `VIDEO.json` to `/output/VIDEO.json`, where the house reads it.
- `VIDEO.json` — the TikTok address of the posted video (placeholder until
  the video is posted).
- `prompt.txt` — the prompt that started this run, verbatim.
- `.makefun/owner.json` — the payout wallet this entry belongs to.

## Run the program the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

## Bounty

- Competition: [Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
- Prize: $20 in USDC, top 10 places at $2 each; places go by the video's
  score — views + 10 × (likes + comments + shares + saves) as TikTok shows
  them to a visitor from the US after the deadline.
- Opens 23 Nov 2026 10:27 WIB, deadline 24 Nov 2026 10:27 WIB.
