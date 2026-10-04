export const GAME_LABEL = { sts1: "Slay the Spire", sts2: "Slay the Spire 2" } as const;

export const CATEGORY = {
  interface: { label: "Game interface", blurb: "Mods and bridges that expose game state and accept actions." },
  modding: { label: "Modding foundation", blurb: "Loaders, libraries and docs that every mod, bot bridge included, builds on." },
  library: { label: "Client library", blurb: "Code that speaks a game interface so a bot doesn't have to." },
  bot: { label: "Bot / agent", blurb: "Programs that play the game end to end or a part of it." },
  simulator: { label: "Simulator", blurb: "Reimplementations of the game for fast, headless rollouts." },
  dataset: { label: "Dataset", blurb: "Run histories and logs to learn from or evaluate against." },
  tool: { label: "Community tool", blurb: "Seed finders, trackers, overlays and advisors." },
  research: { label: "Research", blurb: "Papers, theses and write-ups." },
} as const;

export const APPROACH = {
  rules: { label: "Rules & heuristics", short: "Rules" },
  search: { label: "Search & simulation", short: "Search" },
  rl: { label: "Reinforcement learning", short: "RL" },
  imitation: { label: "Learning from runs", short: "Imitation" },
  llm: { label: "Language models", short: "LLM" },
  tooling: { label: "Tooling", short: "Tooling" },
} as const;

export const STATUS = {
  active: "Active",
  maintained: "Maintained",
  dormant: "Dormant",
  archived: "Archived",
} as const;

export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

export const SUGGEST_URL = "https://github.com/ptrlrd/slaythespire-dev/issues/new?template=suggest-project.yml";
