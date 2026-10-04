---
name: sts-ironclad-agent
url: "https://github.com/destire-mio/sts-ironclad-agent"
repo: destire-mio/sts-ironclad-agent
author: destire-mio
games: [sts1]
category: bot
approaches: [rl, imitation, search]
language: Python
license: MIT
status: active
featured: true
summary: "A20 Ironclad bot: one frozen network makes every out-of-combat choice and simulator search plays combat. The README reports a 50.1% Heart win rate over 501 runs in the original game (95% interval 45.7–54.5%)."
---

A teacher policy trained in the simulator was distilled into the student that plays the real game, and evaluation uses fresh seed blocks it never trained on. The README marks simulator-to-game parity as incomplete and ships a checker for it. This is one of the strongest reported results in this index, for one character only.
