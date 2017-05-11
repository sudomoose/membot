const Discord = require('discord.js');
exports.run = (client, msg) => {

    var author = msg.author;
    var msgEmbed = new Discord.RichEmbed()
        .setTitle('membot')
        .setAuthor('membot', 'https://images.discordapp.net/avatars/305503688145895424/f4d94eaaaa7ddf0c46b5e4f5626e27cf.png?size=512')
        .setColor("#039112")
        .setDescription('About the Spiciest bot ever')
        .setFooter(`Requested by ${author.name}`, author.avatarURL)
        .setURL('https://discordbots.org/bot/305503688145895424')
        .setTimestamp()
        .addField('Author', 'Moosecoop#3054', true)
        .addField('Library', 'Discord.JS (Komada)', true)
        .addField('Lang', 'NodeJS', true)
        .addField('Hosted', 'in California', true);


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
