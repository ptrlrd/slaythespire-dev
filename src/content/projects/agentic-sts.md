---
name: AgenticSTS
url: "https://github.com/AlayaLab/AgenticSTS"
repo: AlayaLab/AgenticSTS
author: AlayaLab
games: [sts2]
category: bot
approaches: [llm]
language: Python
license: "Apache-2.0 (agent), AGPL-3.0 (mod)"
status: active
featured: true
summary: "Research testbed for long-horizon language-model agents on Slay the Spire 2, built around bounded, typed memory instead of a growing transcript. Reports 3/10 wins at Ascension 0 without learned skills and 6/10 with them."
---

Context reaches the model through named slots (rules, episodes, skills) that can each be switched off, which makes ablations straightforward. The project releases 298 trajectories as a Hugging Face dataset. The paper is listed under [Papers](../../papers/). The sample is small, which the authors acknowledge.
