import { existsSync } from "node:fs";

const launcher = new URL("./studio/scripts/studio.mjs", import.meta.url);
if (!existsSync(launcher)) {
  console.error("Run git submodule update --init --recursive first.");
  process.exitCode = 1;
} else {
  process.argv.splice(2, 0, "kinetic-silhouette");
  await import(launcher.href);
}
