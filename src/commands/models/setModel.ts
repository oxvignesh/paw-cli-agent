
import { Command } from 'commander';
import { VALID_MODELS } from '../../lib/constants';
import { getModels, getUserData, writeFileData } from '../../utils';

export const setModelCommand = new Command("setModel")
    .description('Lets user set the default model')
    .option('-m, --model <modelName>', 'Name of the model', '')
    .action(async (options) => {
        const models = getModels();
        let userData = getUserData();

        if (!VALID_MODELS.includes(options.model)) {
            console.log("invalid model");
            return;
        }

        if (userData.selected_model_id === options.model) {
            console.log("model is already set");
            return;
        }

        const model = models.find((m) => m.slug === options.model);
        userData.selected_provider_id = model?.provider.toLowerCase() || '';
        userData.selected_model_id = options.model;

        await writeFileData(userData);
        console.log("model set successfully");
    })
