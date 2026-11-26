import { mkdirSync, writeFileSync } from "node:fs";

// The Moon Gets One Star — one-star review of the Moon, 112 characters.
// Champion of a 13-candidate internal tournament judged by the RULES.txt
// rubric: a real-review voice, a Moon-only grievance (it trails you home
// every night, then disappears for a week — the lunar phases), and a
// punchline that lands on first read.
const REVIEW =
  "★☆☆☆☆ Follows me home every night, then vanishes for a week without texting back. Clingy AND ghosting. Pick one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
