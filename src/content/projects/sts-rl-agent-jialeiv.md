---
name: sts-rl-agent
url: "https://github.com/Jialeiv/sts-rl-agent"
repo: Jialeiv/sts-rl-agent
author: Jialeiv
games: [sts1]
category: bot
approaches: [rl, search]
language: C++
license: MIT
status: active
featured: true
summary: "A0 Ironclad agent: a learned policy handles every out-of-combat choice and sts_lightspeed MCTS plays combat. On 50 held-out seeds it reaches floor 42.5 and wins 14%, against 31.2 and 6% for heuristics."
---

All numbers are from the README's fixed benchmark: the same MCTS combat and the same 50 seeds, with only the out-of-combat policy changed. At 2,000 simulations per decision the learned policy averages floor 38.5 and wins 4%; the heuristics reach 22.8 and 2%. At 50,000 simulations the figures are 42.5 and 14% against 31.2 and 6%. The policy was pretrained with supervision and then trained with REINFORCE inside the simulator. The README also documents attempts at learning combat that did not work.
