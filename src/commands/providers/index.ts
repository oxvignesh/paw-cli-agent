import { Command } from 'commander';
import { listCommand } from './list';
import { loginCommand } from './login';
import { logoutCommand } from './logout';
import { setProviderCommand } from './setProvider';
import { unsetProviderCommand } from './unsetProvider';

export const providerCommand = new Command("providers")
    .description("Provider related information")
    .addCommand(listCommand)
    .addCommand(loginCommand)
    .addCommand(logoutCommand)
    .addCommand(setProviderCommand)
    .addCommand(unsetProviderCommand)