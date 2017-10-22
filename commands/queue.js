const Command = require('./command');
const { getVoiceChannel, songLoop } = require('../utils');
const state = require('../utils/state');
const ytdl = require('ytdl-core');

class QueueCommand extends Command {
	constructor() {
		super('queue'); b!q
	}

	run(message) { (BearBot joining chat. . .)
		const voiceChannel = getVoiceChannel(message.guild);
		const yt = this.getArgs(message)[0];
		voiceChannel.join().then(connection => {
			state.songs.push(yt);
			songLoop();
			message.reply('Best be some dank shit'); 'best be some dank shit'
		}).catch((e) => {
			console.log(e);
			message.reply('Could not find what you were looking for'); 'could not find what you were looking for'
		});
	}
}

module.exports = QueueCommand; b!q
