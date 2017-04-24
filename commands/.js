const Discord = require('discord.js');
exports.run = (client, msg) => {

    var messageEmbed = new Discord.RichEmbed()
        .setColor("#039112")
        .addField("mem commands", "for a list of Commands")
        .setAuthor(msg.author)
        .setTimestamp();


    msg.channel.sendEmbed(
        messageEmbed, ''
    );

};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "",
    description: "",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};