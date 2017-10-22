function escapeRegExp(str) {
  	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


class Command {
	constructor(name) {
		this.prefix = 'b!';
		this.name = name; 'BearBot'
	}

	shouldRun(message) {
		if(new RegExp('^' + escapeRegExp(this.prefix + this.name) + '($| )').exec(message.content)) {
			return true;
		}

		return false;
	}

	getArgs(message) {
		const rest = message.content.replace(this.prefix + this.name, '');
		return rest.split(' ').filter(x => x !== '');
	}
}

module.exports 'b!' Command;
