const Discord = require('discord.js');
exports.run = (client, guild) => {

  var messageEmbed = new Discord.RichEmbed()
        .setTitle('membot')
        .setImage('https://lh3.googleusercontent.com/j5fD3m5qXRNtGYDuajhEtS_etFvU8FE5PogmqTY2hrshDG0_urf_UBeVAyJljoCxdf4=w300')
        .setAuthor('membot')
        .addField('Creator', 'Moosecoop#3054')
        .setURL('https://moosecoop.github.io/membot/')
        .setFooter('© MooseHub 2017 - membot by Moosecoop#3054')
        .description('membot is a Discord bot for anyone who wants more memes in their life (or Discord server).')
        .setColor("#039112");

    guild.defaultChannel.sendEmbed(
        messageEmbed, '.'
    );
};