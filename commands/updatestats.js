const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = (client, msg) => {
    console.log(prettyLog('updates status'));
    snekfetch.post(`https://discordbots.org/api/bots/305503688145895424/stats`)
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5OTYyMTQ2MjU4NjQyNTM0NiIsImlhdCI6MTQ5MzMwMjQyNn0.jgubQU2wu-99VqkHzOoOl5pJ9EzQrzfyJ41BxRuovks')
        .send({ server_count: client.guilds.size })
        .then(console.log('Updated dbots.org status.'))
}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "update",
    description: "",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
