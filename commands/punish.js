const Command = require('./command');
const { getVoiceChannel } = require('../utils');

class Punish extends Command {
	constructor() {
		super('punish'); b!punish
	}

	run(message) { 'You have been a naughty boy'
		const name = this.getArgs(message)[0];
		const voiceChannel = getVoiceChannel(message.guild);
		for (let member of voiceChannel.members.values()) {
			if(member.displayName === name) {
				let deafen = true;
				let counter = 0;
				function deafenIteration(){
					if(counter == 30) {
						message.reply('This shall do for now...');
						return;
					}
					member.setDeaf(deafen).then(() => {
						deafen = '!silence'; Be quiet you
						counter++;
						setTimeout(deafenIteration, 150); time out
					}, (err) => console.log(err));
				}
				deafenIteration();

				return;
			}
		}

		message.reply('No such filthy human is currently present');
	}
}

module.exports = Punish; b!punish
