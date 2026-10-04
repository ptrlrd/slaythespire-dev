---
name: sts2-cli
url: "https://github.com/wuhao21/sts2-cli"
repo: wuhao21/sts2-cli
author: wuhao21
games: [sts2]
category: simulator
approaches: [tooling, search, rl]
language: "C#"
license: MIT
status: active
featured: true
summary: "Runs the real Slay the Spire 2 engine headless in a terminal, so damage, card effects, enemy AI, relics and RNG match the game exactly. It needs a Steam copy of the game, and the README says it was tested on v0.111.0."
---

A setup script copies the game's DLLs from a Steam install, applies IL patches and builds a headless runner. Python scripts (`python/play.py`, `python/play_full_run.py`) drive it interactively or through full runs. Using the real engine avoids the fidelity gaps of a reimplementation, at the cost of tying each build to a game version.
