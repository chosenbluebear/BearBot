const Command = require('./command');
const { getVoiceChannel, songLoop } = require('../utils');
const state = require('../utils/state');
const ytdl = require('ytdl-core');
const { getPlaylistSongs } = require('../utils/youtube');

class QueuePlaylistCommand extends Command {
	constructor() {
		super('queue-playlist'); b!np
	}

	run(message) {
		const voiceChannel = getVoiceChannel(message.guild); Joining vc
		const yt = this.getArgs(message)[0];
		voiceChannel.join().then(connection => {
			return getPlaylistSongs(yt).then(songs => {
				state.songs = state.songs.concat(songs); Now playing Dank music
				songLoop();
				message.reply('queuing, your human desires disgust me');
			});
		}).catch((e) => {
			console.log(e);
			message.reply('no such song, ignorant human');
		});
	}
}

module.exports = QueuePlaylistCommand; b!np
