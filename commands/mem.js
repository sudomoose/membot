const Discord = require('discord.js');
exports.run = (client, msg) => {
    var memes = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.png",
        "10.jpg",
        "11.png",
        "12.jpg"
    ]

    var mem = memes[Math.floor(Math.random() * memes.length) + 1];
    console.log(`mem: ././mems/${mem}`);
    msg.channel.sendFile(`././mems/${mem}`);
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["memes", "memz", "mems"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "mem",
    description: "sends a random mem",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};
