const snekfetch = require('snekfetch');
exports.run = (client, guild) => {
    var channel = guild.defaultChannel;
    var name = guild.name;
    if(guild.availble) {
        channel.sendMessage(`whats poppin skrubs of ${name}... try \`mem help\` for commands!`);
    }
    snekfetch.post(`https://discordbots.org/api/bots/305503688145895424/stats`)
  .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5OTYyMTQ2MjU4NjQyNTM0NiIsImlhdCI6MTQ5MzMwMjQyNn0.jgubQU2wu-99VqkHzOoOl5pJ9EzQrzfyJ41BxRuovks')
  .send({ server_count: client.guilds.size })
  .then(console.log('Updated dbots.org status.'))
};