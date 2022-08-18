/*
	TheCodingBot v6
	https://tcb.nekos.tech
*/

module.exports = {
	metadata: {
		name: "English",
		full_name: "English (en_US)",
		description: "English - United States",
		langCode: "en_US",
		translator: "Aisuruneko",
		version: "1.0.0.0"
	},
	translations: {


		// Success
		"success.generic": "Success!",


		// Errors
		"errors.generic": "An error occurred!",
		"errors.commands.generic": "That command does not exist or is no longer available.",


		// Commands
		"commands.test.test": "Hello, world!",

		"commands.ping.title": "APPNAME Status",
		"commands.ping.status": "Status",
		"commands.ping.statusTypes": [
			"READY",
			"CONNECTING",
			"RECONNECTING",
			"IDLE",
			"NEARLY",
			"DISCONNECTED",
			"WAITING FOR GUILDS",
			"IDENTIFYING",
			"RESUMING"
		],
		"commands.ping.ping": "Ping",
		"commands.ping.servers": "Servers",
		"commands.ping.latency": "Latency",

		"commands.hug.title": "Hug",
		"commands.hug.hugs": "hugs",
		"commands.hug.personal": "Here's a hug to you,",

		"commands.pat.title": "Pat",
		"commands.pat.pats": "pats",
		"commands.pat.personal": "Here's a pat to you,",

		"commands.kiss.title": "Kiss",
		"commands.kiss.kisses": "kisses",
		"commands.kiss.personal": "Here's a kiss to you,",

		"commands.nom.title": "Nom",
		"commands.nom.noms": "noms",
		"commands.nom.personal": "Nomming you,",

		"commands.cuddle.title": "Cuddle",
		"commands.cuddle.cuddles": "cuddles",
		"commands.cuddle.personal": "I will cuddle you,",

		"commands.eval.title": "Eval",
		"commands.eval.result": "Evaluation Result",

		"commands.source.title": "Source",
		"commands.source.description": "You can find the Source Code [here](%SOURCELINK%)",

		"commands.kick.title": "Kick",
		"errors.commands.kick.invalid_target": "The user does not exist in the server.",
		"errors.commands.kick.user_is_target": "Why do you want to kick yourself?",
		"commands.kick.complete": "%USERTAG%",

	}
}