/**
 * Builds playable files from the original listening scripts.
 * Tool: eSpeak NG 1.51, then ffmpeg libmp3lame.
 * These are synthesized files, not human or exam recordings.
 * Re-run after a script change: npx tsx scripts/generate-language-study-audio.ts
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { mockTests, practiceTasks } from "../lib/languageStudy/content";

const outDir = join(process.cwd(), "public/language-study/audio");
mkdirSync(outDir, { recursive: true });

type Clip = { id: string; text: string; voice: string };

const clips: Clip[] = [];

for (const task of practiceTasks) {
  if (task.skill !== "listening") continue;
  clips.push({
    id: task.id,
    text: task.script,
    voice: task.audioLang.toLowerCase().startsWith("fi") ? "fi" : "en-gb",
  });
}

for (const mock of mockTests) {
  if (mock.availability.status !== "full_practice" || mock.availability.body.kind !== "objective") {
    continue;
  }

  const text = mock.availability.body.parts
    .map((part) => part.script)
    .filter((script): script is string => Boolean(script))
    .join("\n\n");

  if (!text) {
    continue;
  }

  const lang = mock.availability.body.parts.find((part) => part.audioLang)?.audioLang ?? "en";
  clips.push({
    id: mock.id,
    text,
    voice: lang.toLowerCase().startsWith("fi") ? "fi" : "en-gb",
  });
}

for (const clip of clips) {
  const wav = join(tmpdir(), `${clip.id}.wav`);
  const mp3 = join(outDir, `${clip.id}.mp3`);
  execFileSync("espeak-ng", ["-v", clip.voice, "-s", "138", "-w", wav, clip.text], {
    stdio: "inherit",
  });
  execFileSync(
    "ffmpeg",
    ["-y", "-i", wav, "-codec:a", "libmp3lame", "-qscale:a", "7", mp3],
    { stdio: "ignore" }
  );
  rmSync(wav, { force: true });
  console.log(clip.id);
}

console.log(`wrote ${clips.length} files`);
