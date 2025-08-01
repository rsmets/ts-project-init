import { Config } from "./types";

/**
 * Main entry point of the application
 */
async function main() {
  const config: Config = {
    name: "typescript-project-init",
    version: "1.0.0",
  };

  console.log(`${config.name} v${config.version}`);
}

main();
