const Discord = require('discord.js');
exports.run = (client, msg) => {
    var msgEmbed = new Discord.RichEmbed()
        .setTitle('membot')
        .setAuthor('author', 'https://images.discordapp.net/avatars/305503688145895424/f4d94eaaaa7ddf0c46b5e4f5626e27cf.png?size=512')
        .setColor("#039112")
        .setDescription('About the Spiciest bot ever')
        .setFooter('footer')
        .setTimestamp()
        .addField('field title', 'field value')
        .addField('inline field title', 'inline field value', true);

    msg.channel.sendEmbed(
        msgEmbed, ''
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
    name: "about",
    description: "about membot",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
