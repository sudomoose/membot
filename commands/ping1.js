const Discord = require('discord.js');
exports.run = (client, msg, [...args]) => {
    var ping = client.ping;
    var messageEmbed = new Discord.RichEmbed()
        .addField("Discord", `${ping}`)
        .setColor("#039112");
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
    name: "ping1",
    description: "get Moosebot's ping",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};