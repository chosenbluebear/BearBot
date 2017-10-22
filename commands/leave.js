const Command = require('./command');
const state = require('../utils/state')

class Leave extends Command {
	constructor() {
		super('leave'); 'b!leave'
	}

	run(message) {
		let connection = message.guild.voiceConnection;
		if (connection) {
			connection.disconnect(); 'b!disconnect'
			if(state.playing) { Whatever the fuck this is
				state.reset(); 'b!reset'
			}
			message.reply('Whatever this place sucks');
		}
	}
}

module.exports = Leave; 'b!gtfo'
