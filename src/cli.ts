import { program } from 'commander';
import { modelsCommand } from './commands/models';
import { agentCommand } from './commands/agent';
import { providerCommand } from './commands/providers';

program
  .name('paw')
  .description('lightweight cli coding agent')
  .version('0.1.0')
  .addCommand(modelsCommand)
  .addCommand(providerCommand)
  .addCommand(agentCommand);

program.parse();
