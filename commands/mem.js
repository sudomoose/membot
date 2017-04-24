const Discord = require('discord.js');
exports.run = (client, msg) => {
    var memes = [
        "https://pbs.twimg.com/media/C9F_lnGUAAAdoN0.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/285809670503792643/flat800x800070f.u2.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/285578271456886786/image.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/284525452427657216/penis_oluxm8.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/283309657429377024/eJwFwVsOhCAMAMC7cAAKVV7ehiBBs9oSqPFjs3ffma96xqU2dYj0uQHs5yw8dj2FR25VN-Z21dzPqQvfkEVyOe5KMiHaFZNNIUVnXbBoAOOCK5rg3WKM9eg8PPQhfkl3aur3B-b1IqE.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/283299157953871874/image.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/282742168601493504/me_everytime_olloag.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/281072721985536002/google_has_no_chill.jpg",
        "https://cdn.discordapp.com/attachments/245646199116267520/270069145930956804/IMG_20170115_005414.jpg",
        "https://cdn.discordapp.com/attachments/214262280672641025/259588005772263425/lolcatz.png",
        "https://cdn.discordapp.com/attachments/166599726861516800/218422531835559939/2016-08-07_23-16-55.png",
        "https://cdn.discordapp.com/attachments/166599726861516800/218422068771815425/w47ZlYY.jpg",
        "https://cdn.discordapp.com/attachments/166599726861516800/203755413055864832/CndnFgGUkAADzrv.png"
    ]

    var mem = memes[Math.floor(Math.random() * memes.length) + 1];
    msg.channel.sendMessage(mem);
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
    description: "Command Description",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};