import { exec } from "child_process";

export function startProjectServer(projectPath: string, port: number) {
  const command = `PORT=${port} node ${projectPath}`;
  const process = exec(command);

  if (process.stdout) {
    process.stdout.on("data", (data) => {
      console.log(`Project Server: ${data}`);
    });
  }

  if (process.stderr) {
    process.stderr.on("data", (data) => {
      console.error(`Error: ${data}`);
    });
  }

  return process;
}
