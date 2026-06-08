import { Command } from 'commander';
import chalk from 'chalk';
import { getProviders } from '../../utils';

export const listCommand = new Command("list")
    .description('Lets user list all the providers')
    .action(() => {
        const providers = getProviders();

        // list header
        console.log(`\n${chalk.whiteBright.bold(' SUPPORTED PROVIDERS:')}`);

        // list providers
        providers.forEach((provider, index) => {
            console.log(` ${index + 1}.${chalk.white(provider.name)}`);
        });
    })