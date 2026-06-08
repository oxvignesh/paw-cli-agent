
import { Command } from 'commander';
import { VALID_PROVIDERS } from '../../lib/constants';
import { getUserData, writeFileData } from '../../utils';

export const logoutCommand = new Command("logout")
    .description('Lets user logout from the provider')
    .option('-p, --provider <providerName>', 'Name of the provider (openai, anthropic, gemini)', '')
    .action(async (options) => {

        if (!options.provider) {
            console.log("please provide a provider name.");
            return;
        }

        if (!VALID_PROVIDERS.includes(options.provider)) {
            console.log("invalid provider");
            return;
        }

        let userData = getUserData();
        const provider = userData.providers.find((p) => p.slug == options.provider)

        if (!provider) {
            console.log("provider not found");
            return;
        }

        if (userData.selected_provider_id == provider.slug) {
            userData.selected_provider_id = "";
            userData.selected_model_id = "";
        }

        const index = userData.providers.indexOf(provider);
        userData.providers.splice(index, 1);

        await writeFileData(userData);
        console.log("logged out successfully!");
    })

