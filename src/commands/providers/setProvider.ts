
import { Command } from 'commander';
import { VALID_PROVIDERS } from '../../lib/constants';
import modelsData from "../../lib/models.json";
import { getUserData, writeFileData } from '../../utils';

export const setProviderCommand = new Command("setProvider")
    .description('Lets user set the default provider')
    .option('-p, --provider <providerName>', 'Name of the provider (openai, anthropic, gemini)', '')
    .action(async (options) => {
        console.log("provider is " + options.provider)
        let userData = getUserData();

        if (!VALID_PROVIDERS.includes(options.provider)) {
            console.log("invalid provider");
            return;
        }

        if (userData.selected_provider_id === options.provider) {
            console.log("provider is already set");
            return;
        }

        const filteredModels = modelsData.models.filter((m) => m.provider.toLowerCase() === options.provider);
        userData.selected_provider_id = options.provider;
        userData.selected_model_id = filteredModels[0]?.slug ?? '';

        await writeFileData(userData);
        console.log("provider set successfully");
    })
