---
name: spirecomm
url: https://github.com/ForgottenArbiter/spirecomm
repo: ForgottenArbiter/spirecomm
author: ForgottenArbiter
games: [sts1]
category: library
approaches: [rules, tooling]
language: Python
status: dormant
featured: true
summary: Python package that wraps Communication Mod's protocol in game-state objects and actions, with a simple example agent.
---

spirecomm parses Communication Mod's JSON into Python objects (player, monsters, cards, relics, map, screens) and exposes actions as classes, so an agent only has to return the next action. The bundled example agent plays with simple priority rules and is a common starting point.
