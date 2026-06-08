import { Command } from "commander";
import chalk from "chalk";
import { generateText } from 'ai';
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { getUserData } from "../utils";

const userData = getUserData();

//providers
const openai = createOpenAI({
  apiKey: userData.providers.find((p) => p.slug === "openai")?.api_key || ""
})

const anthropic = createAnthropic({
  apiKey: userData.providers.find((p) => p.slug === "anthropic")?.api_key || ""
})

const google = createGoogleGenerativeAI({
  apiKey: userData.providers.find((p) => p.slug === "google")?.api_key || ""
})

const handleProvider = (slug: string) => {
  if (userData.selected_provider_id === "openai") {
    return openai(slug);
  } else if (userData.selected_provider_id === "anthropic") {
    return anthropic(slug);
  } else if (userData.selected_provider_id === "google") {
    return google(slug);
  }
}

export const agentCommand = new Command("agent")
  .description('Runs the agent')
  .option('-p, --prompt <prompt>', 'prompt', '')
  .action(async (options) => {
    console.log("User prompt is ..." + options.prompt);

    if (userData.selected_provider_id.length === 0 || userData.selected_model_id.length === 0) {
      console.log(chalk.red("please select a provider and model"));
      return;
    }

    const { text } = await generateText({
      model: handleProvider(userData.selected_model_id) || '',
      prompt: options.prompt,
    });

    console.log(text);
  });