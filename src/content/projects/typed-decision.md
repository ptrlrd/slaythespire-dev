---
name: typed-decision-slay-the-spire
url: "https://github.com/MindrLabs/typed-decision-slay-the-spire"
repo: MindrLabs/typed-decision-slay-the-spire
author: MindrLabs
games: [sts1]
category: research
approaches: [llm, imitation]
language: Python
license: MIT
status: active
summary: Benchmark where small language models choose among typed options on the same 200 A0 Ironclad seeds. Nimble-9B averaged floor 14.1 and Laya English 10.4; fine-tuning on a search bot's decisions raised them to 19.5 and 17.1.
---

Each decision is shown in several option orders to check for position bias. The fine-tuning set is 39,884 decisions from the search bot. The README reports the gains and the hardware cost of each model.
