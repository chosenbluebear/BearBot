const Command = require('./command');
const state = require('../utils/state');

class StopCommand extends Command {
	constructor() {
		super('stop'); b!stop
	}

	run(message) {
		if(state.playing) {
			message.reply('stopping, finally I thought you will never let me go'); Why stop?
			state.songs = [];
			state.stream.end();
			state.streamDispatcher.end();
			state.playing = false;
		} else {
			message.reply('there is currently no active song, why bother me?'); Wasting my time >:/
		}
	}
}

module.exports = StopCommand; b!stop
