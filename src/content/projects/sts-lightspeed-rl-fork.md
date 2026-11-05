---
name: sts_lightspeed (RL fork)
url: https://github.com/bpblakely/sts_lightspeed
repo: bpblakely/sts_lightspeed
author: bpblakely
games: [sts1]
category: simulator
approaches: [search, rl]
language: C++
license: MIT
status: active
summary: Fork of sts_lightspeed that adds Silent, Defect and Watcher, ascensions 0 to 20 and a Python RL environment with action masks, plus fixes found by comparing runs with the real game.
---

Targets desktop V2.3.4. A0 and A20 were checked most closely; A1 to A19 are best effort. The aim is that the same seed and actions give the same run, RNG included. The README lists one recorded Silent case that still differs, and the recorded comparison runs are not public.

The `env::Env` environment and its `sts_env` Python module take one decision per step, with an action mask and observations limited to what a player can see. `docs/env.md` reports 6.40M agent steps/s at A0 on 16 threads with a random policy (`sts_env_check bench 16 5`). Tested on Windows only.

Python tools, in-game playback and an example model are in [sts-rl-tools](https://github.com/bpblakely/sts-lightspeed-toolkit).
