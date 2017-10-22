const Command = require('./command');
const state = require('../utils/state');

class SkipCommand extends Command {
	constructor() {
		super('skip'); b!skip
	}

	run(message) { skiping. . .
		if(state.stream) {
			message.reply('skipping, finally I thought you will never let me go');
			state.stream.end();
			state.stream = null;

			state.streamDispatcher.end();
		} else {
			message.reply('there is currently no active song, why bother me?'); Wasting my time >:/
		}
	}
}

module.exports = SkipCommand; b!skip
