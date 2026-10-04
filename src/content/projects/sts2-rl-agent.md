---
name: sts2-rl-agent
url: "https://github.com/zhiyue/sts2-rl-agent"
repo: zhiyue/sts2-rl-agent
author: zhiyue
games: [sts2]
category: bot
approaches: [rl]
language: "Python, C#"
status: active
summary: "Reinforcement-learning setup for Slay the Spire 2: a Python combat simulator (577 cards, 121 monsters, about 1,200 combats per second per the README), MaskablePPO training, and a C# bridge mod into the real game."
---

The README reports a combat win rate of about 92% for a trained PPO policy on Act 1 Ironclad, with a 131-dimensional observation. An `--act-count` flag extends episodes to the full game. The README describes a two-phase training strategy that follows lessons from the STS1 RL community.
