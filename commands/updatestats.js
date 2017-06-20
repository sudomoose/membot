const snekfetch = require('snekfetch');
const prettyLog = require('prettyconsole');
exports.run = (client, msg) => {
    console.log(prettyLog('updates status'));
    snekfetch.post(`https://discordbots.org/api/bots/305503688145895424/stats`)
        .set('Authorization', 'token')
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
    description: "for moose only",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
