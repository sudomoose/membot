const Discord = require('discord.js');
exports.run = (client, msg) => {
    var msgEmbed = new Discord.RichEmbed()
        .setTitle('4chan')
        .setThumbnail('http://orig04.deviantart.net/74de/f/2012/155/d/1/4chan_logo_hq_by_michaudotcom-d529rdh.png')
        .addField('4chan', 'is the place where the spiciest memes are')
        .setURL('https://4chan.org')
        .setColor("#039112");

    msg.channel.sendEmbed(
        msgEmbed, ''
    );
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["chan"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "4chan",
    description: "link to 4chan",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
