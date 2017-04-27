const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const komada = require(`${client.coreBaseDir}/package.json`); // eslint-disable-line
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  var msgEmbed = new Discord.RichEmbed()
    .setTitle('Stats')
    .setAuthor('Membot', 'https://images.discordapp.net/avatars/305503688145895424/f4d94eaaaa7ddf0c46b5e4f5626e27cf.png?size=512')
    .addField('Guilds', `${client.guilds.size.toLocaleString()}`)
    .addField('Users', `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField('Channels', `${client.channels.size.toLocaleString()}`)
    .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField('Library', 'Komada')
    .addField('Komada Version', `v${komada.version}`, true)
    .addField('Uptime', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .setTimestamp()
    .setColor("#039112")
    .setFooter('© MooseHub 2017', 'https://images.discordapp.net/avatars/305503688145895424/f4d94eaaaa7ddf0c46b5e4f5626e27cf.png?size=512');

  msg.channel.sendEmbed(
        msgEmbed, ''
    );
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "stats",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
};
