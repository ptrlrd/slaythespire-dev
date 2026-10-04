---
name: Communication Mod
url: https://github.com/ForgottenArbiter/CommunicationMod
repo: ForgottenArbiter/CommunicationMod
author: ForgottenArbiter
games: [sts1]
category: interface
approaches: [tooling]
language: Java
status: dormant
featured: true
summary: A ModTheSpire mod that launches an external process and talks to it over stdin/stdout, sending game state as JSON and accepting text commands. Most Slay the Spire bots are built on it.
---

Communication Mod starts a process you configure, writes the current game state to its standard input as JSON whenever the game is ready for a decision, and reads commands such as `play`, `end`, `choose`, `potion` and `proceed` back from its standard output.

It is also published on the Steam Workshop, and it depends on ModTheSpire and BaseMod.
