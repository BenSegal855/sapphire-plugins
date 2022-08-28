import { Listener } from '@sapphire/framework';
import { MessageSubcommandErrorPayload, SubcommandPluginEvents } from '../lib/types/Events';

export class PluginListener extends Listener<typeof SubcommandPluginEvents.MessageSubcommandError> {
	public constructor(context: Listener.Context) {
		super(context, { event: SubcommandPluginEvents.MessageSubcommandError });
	}

	public run(error: unknown, context: MessageSubcommandErrorPayload) {
		const { name, location } = context.command;
		this.container.logger.error(`Encountered error on message subcommand "${name}" at path "${location.full}"`, error);
	}
}
