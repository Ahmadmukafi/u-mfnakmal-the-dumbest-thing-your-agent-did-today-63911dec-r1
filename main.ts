import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on the literal reading: the agent did exactly what it was
// asked, just in the wrong world — a simulator instead of a real booking.
const LINE = "I asked my agent to book a flight. It booked a flight simulator.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
