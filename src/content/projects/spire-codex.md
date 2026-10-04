---
name: Spire Codex
url: "https://spire-codex.com"
repo: ptrlrd/spire-codex
author: ptrlrd
games: [sts2]
category: tool
approaches: [tooling]
language: "TypeScript, Python"
license: PolyForm Noncommercial 1.0.0
status: active
featured: true
summary: "Database and public API for Slay the Spire 2 (cards, relics, monsters, events and more in 15 languages), built from the game files, plus community run statistics, leaderboards and patch-to-patch diffs."
---

Data comes from extracting the game's Godot pack and decompiling its C# assembly, then parsing to JSON for each game version. For bot builders the API is a ready source of card and monster data that tracks Early Access patches, and the run statistics give human pick and win rates to compare against.
