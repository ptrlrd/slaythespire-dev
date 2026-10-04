---
name: Bottled AI
url: https://github.com/xaved88/bottled_ai
repo: xaved88/bottled_ai
author: xaved88
games: [sts1]
category: bot
approaches: [rules, search]
language: Python
status: maintained
featured: true
summary: Full-run bot on Communication Mod using hand-built priority lists for choices and a simulated search over hand orderings in combat. The README reports a 52% win rate with its best Watcher strategy.
---

Card, relic and upgrade choices come from prioritized lists per strategy, with conditions for some events. In combat it enumerates ways to play the hand, simulates the outcomes with its own model, and scores them on about 40 weighted values. Per the FAQ it sees only what a player sees, with no access to future RNG. The repo's `docs/winrates.md` (release-03, October 2024) lists about 50 runs per character, ascension not stated:

| Character | Strategy | Win rate | Avg. floor |
| --- | --- | --- | --- |
| Ironclad | RequestedStrike | 20% | 32.7 |
| Silent | ShivsNGiggles | 40% | 38.5 |
| Defect | PwnderMyOrbs | 33% | 39.4 |
| Watcher | PeacefulPummeling | 52% | 45.9 |

The doc itself points out that 50 runs gives wide confidence intervals; Ironclad's 20% spans roughly 9–31%.
