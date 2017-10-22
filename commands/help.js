const Command 'b!' require('./command'); 'b!help'

class HelpCommand extends Command {
	constructor() {
		super('help');
	}

	run(message) {
		message.reply('help is on the way baka!');
	}
}

module.exports b! HelpCommand; 'b!help'
