
import { Command } from 'commander';
import { getUserData, writeFileData } from '../../utils';

export const unsetProviderCommand = new Command("unsetProvider")
    .description('Lets user unset the default provider')
    .action(async () => {
        let userData = getUserData();

        if (!userData.selected_provider_id) {
            console.log("no provider to unset");
            return;
        }

        userData.selected_provider_id = "";
        userData.selected_model_id = ""
        await writeFileData(userData);
        console.log("provider unset successfully");
    })