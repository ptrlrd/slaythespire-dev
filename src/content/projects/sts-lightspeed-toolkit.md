---
name: sts-lightspeed-toolkit
url: https://github.com/bpblakely/sts-lightspeed-toolkit
repo: bpblakely/sts-lightspeed-toolkit
author: bpblakely
games: [sts1]
category: bot
approaches: [rl, tooling]
language: Python
license: MIT
status: active
summary: Reinforcement learning tools for an sts_lightspeed fork, a PPO example model for Defect, and a playback tool that runs a simulated run in the real game and compares every step.
---

Built on the [sts_lightspeed RL fork](https://github.com/bpblakely/sts_lightspeed). It provides a vectorized environment, a single-env gymnasium version, a run archive and HTML reports. Playback needs your own copy of the game (build V2.3.4) with ModTheSpire and BaseMod, and uses Communication Mod. Tested on Windows only.

The example model covers A20 Defect only and the training script is not included. Over 1,000 simulated runs with sampled actions, after 144M training steps, it reached floor 19.6 on average (standard deviation 9.1, best 50) and won none, so it is a starting point rather than a strong player.
