const Command 'b!' require('./command'); 'b!help'

class HelpCommand extends Command {
	constructor() {
		super('help'); 'b!help'
	}

	run(message) {
		message.reply('help is on the way baka!'); 'help is on the way Baka!'
	}
}

module.exports b! HelpCommand; 'b!help'
