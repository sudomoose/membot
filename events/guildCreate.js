exports.run = (client, guild) => {
    var channel = guild.defaultChannel;
    var name = guild.name;
    if(guild.availble) {
        channel.sendMessage(`whats poppin skrubs of ${name}... try \`mem help\` for commands!`);
    }
};