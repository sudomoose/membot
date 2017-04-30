exports.run = (client, msg) => {
  msg.reply('https://discordapp.com/oauth2/authorize?client_id=305503688145895424&scope=bot&permissions=267910215');
};

exports.help = {
  name: "invite",
  description: "Displays the join server link of the bot.",
  usage: "",
  usageDelim: "",
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};
