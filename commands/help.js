const Discord = require('discord.js');
exports.run = (client, msg, [cmd]) => {
  var helpEmbed = new Discord.RichEmbed()
    .setTitle(`Commands`)
    .setAuthor(`dat boi named ${msg.author.username}`, `${msg.author.avatarURL}`)
    .setColor("#039112")
    .setTimestamp()
    .setDescription(`A list of membot's commands n stuff`)
    .addField('Commands', `help - help commandn\nstats - membot's staff\nmem - random mem\ninvite - membot's invite link\nabout - about membot\n4chan - link to 4chan`)
    .setFooter(`Requested by ${msg.author.username}`, `${msg.author.avatarURL}`);

  msg.channel.send(helpEmbed);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "help",
  description: "display help",
  usage: "",
  usageDelim: "",
};
