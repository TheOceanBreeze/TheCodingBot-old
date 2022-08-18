/*
	TheCodingBot v6
	https://tcb.nekos.tech
*/

module.exports = {
	name: "channelCreate",
	description: "Emits when a channel is created.",
	author: ["Aisuruneko"],

	execute: async(app, nChannel) => {
		const guild = nChannel.guild;
		const serverInfo = await app.DBs.TheCodingBot.serverSettings.findOne({ where: { serverID: guild.id } });
		const logging = await app.DBs.TheCodingBot.logging.findOne({ where: { serverID: guild.id } });
		if (!serverInfo || !logging) return;

		const logChannel = logging.get("guildLog") ? guild.channels.cache.get(logging.get("guildLog")) : null;
		if (!logChannel) return;

		var embed = {
			author: { name: `${guild.name} (${guild.id})`, iconURL: guild.iconURL({ format: "png", size: 1024 }) },
			title: "Channel Created",
			color: app.config.system.embedColors.lime,
			description: `There are now ${guild.channels.cache.size} channels.`,
			fields: [
				{ name: "Name", value: nChannel.name, inline: true },
				{ name: "ID", value: nChannel.id, inline: true },
				{ name: "Created At", value: new Date(nChannel.createdTimestamp).toString() }
			],
			footer: { text: app.config.system.footerText }
		};

		const { AuditLogEvent } = app.modules["discord.js"];
		const fetchedLogs = await guild.fetchAuditLogs({
			limit: 1,
			type: AuditLogEvent.ChannelCreate,
		});
		const auditLog = fetchedLogs.entries.first();
		if (!auditLog) return logChannel.send({ embeds: [ embed ] });
		const { executor, target } = auditLog;

		embed.fields.push({ name: "Created by", value: `${executor.tag} (${executor.id})` });
		embed.thumbnail = { url: executor.displayAvatarURL({ format: "png", size: 1024 }) };
		logChannel.send({ embeds: [ embed ] });
	}
}