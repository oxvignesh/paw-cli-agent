
import { Command } from 'commander';
import type { Provider, UserData } from '../../types';
import { writeFileData, getUserData } from '../../utils';
import { VALID_PROVIDERS } from '../../lib/constants';

export const loginCommand = new Command("login")
    .description('Lets user login into the provider (use it as default)')
    .option('-p, --provider <providerName>', 'Name of the provider (openai, anthropic, gemini)', '')
    .option('-a, --api_key <apiKey>', 'Your api key', '')
    .action(async (options) => {
        if (!options.provider) {
            console.log("please provide a provider");
            return;
        }

        if (!options.api_key) {
            console.log("please provide an API key");
            return;
        }

        if (!VALID_PROVIDERS.includes(options.provider)) {
            console.log("invalid provider");
            return;
        }

        //save
        let user: UserData = getUserData();
        let provider: Provider = {
            slug: options.provider,
            api_key: options.api_key
        }

        let isAdded: boolean = false;

        user.providers.forEach(p => {
            if (p.slug == provider.slug) {
                if (p.api_key === provider.api_key) {
                    console.log("provider already added!");
                    isAdded = true;
                    return;
                }
                p.api_key = provider.api_key;
                console.log("provider updated successfully!")
                isAdded = true;
            }
        });

        if (!isAdded) {
            user.providers.push(provider);
            console.log("provider added successfully!")
        }

        await writeFileData(user);
        console.log("logged in successfully!");

    })