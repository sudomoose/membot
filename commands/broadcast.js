const Discord = require('discord.js');
const moment = require("moment");
const chalk = require("chalk");
const clk = new chalk.constructor({ enabled: true });

exports.run = (client, msg, [messageCont]) => {
    var announcement = new Discord.RichEmbed() //embed
        .setTitle('Announcement')
        .setURL('https://discordbots.org/bot/305503688145895424')
        .setColor("#039112")
        .setAuthor('membot dev team', 'https://images.discordapp.net/avatars/305503688145895424/f4d94eaaaa7ddf0c46b5e4f5626e27cf.png?size=512')
        .setTimestamp()
        .setDescription('Announcement from membot dev team')
        .addField('Message:', `${messageCont}`);

    var guildsToMsg = client.guilds;
    var guildsFailed = 0;
    var guildsSucceeded = 0;
    var guilds = client.guilds.size;

    guildsToMsg.forEach((guild) => {
        if (guild.available) { //check if guild is available (if guild exists or is affected by outage)
            var channel = guild.defaultChannel;
            var channels = guild.channels;
            channels.forEach((channel) => {
                channel.sendEmbed(
                    announcement, 'Announcement from membot dev team'
                );
                channel.sendMessage(`Incase the embed won't load or didn't work, here is a plain text version of the announcement\n__**ANNOUNCEMENT:**__ ${messageCont}`);
            });

            guildsSucceeded++;
        } else {
            guildsFailed++;
        }
    });
    console.log(`${clk.bgYellow(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`)} Announcement: ${messageCont}`);
    console.log(`${clk.bgYellow(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`)} ${guildsFailed} failed`);
    console.log(`${clk.bgYellow(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`)} ${guildsSucceeded} succeeded`);
    console.log(`${clk.bgYellow(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`)} ${guilds} total`);
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: []
};

exports.help = {
    name: "broadcast",
    description: "posts message to general channel of all guilds",
    usage: "<message:str>",
    usageDelim: "",
    extendedHelp: ""
};
