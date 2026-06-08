import { Command } from "commander";
import { listCommand } from "./list";
import { setModelCommand } from "./setModel";

export const modelsCommand = new Command("models")
  .addCommand(listCommand)
  .addCommand(setModelCommand)