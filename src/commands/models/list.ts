import { Command } from 'commander';
import chalk from 'chalk';
import { getUserData, getModels } from '../../utils';

export const listCommand = new Command("list")
    .description('Returns all the supported models')
    .option('-m, --model <modelName>', 'name of the model', 'all')
    .action((options) => {
        const models = getModels();
        const userData = getUserData();

        const selectedModel = userData.selected_model_id;

        let filteredModels = models;

        if (options.model !== "all") {
            filteredModels = filteredModels.filter((model) => model.name.includes(options.model));
        }

        const headerTitle = ` Supported Models`
        console.log(`\n${chalk.whiteBright.bold(headerTitle)}`);

        let lastProvider = "";
        let index = 1;

        if (filteredModels.length > 0) {
            filteredModels.forEach((model) => {
                if (model.provider !== lastProvider) {
                    console.log(`\n ${chalk.whiteBright(model.provider.charAt(0).toUpperCase() + model.provider.slice(1))}:`);
                    lastProvider = model.provider;
                    index = 1;
                }
                console.log(` ${index++}.${chalk.white(model.name)} - ${chalk.white(model.slug)}${model.slug.toLowerCase() === selectedModel ? chalk.gray("(current)") : ""}`);
            });
        } else if (options.model !== "all") {
            console.log(` ${chalk.red(`No model found matching "${options.model}"`)}`);
        }
    });