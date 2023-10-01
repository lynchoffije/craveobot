const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  let param = db.fetch(`para_${message.author.id}`);
  let miktar = args[0];

  if (!miktar) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(
          `⛔ Bankaya yatırılacak para miktarını girmelisin!\n\`c!yatır <miktar || hepsi>\``
        )
    );
  }

  if (miktar === 'hepsi' || miktar === 'all') {
    if (param === 0) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setDescription("⛔ Bankaya yatırmak için hiç paran yok!")
      );
    }

    db.add(`bankapara_${message.author.id}`, param);
    db.add(`para_${message.author.id}`, -param);

    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(`✅ Başarılı, bankaya ${param} 💸 yatırdın!`)
    );
  } else {
    if (isNaN(miktar)) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`)
      );
    }

    if (miktar < 0 || miktar.startsWith('0')) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setDescription(`🤔 Geçerli bir miktar girmelisin!`)
      );
    }

    if (miktar > param) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setDescription(`⛔ Bankaya yatırmak için elinde sadece ${param} 💸 var`)
      );
    }

    db.add(`para_${message.author.id}`, -miktar);
    db.add(`bankapara_${message.author.id}`, miktar);

    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(`✅ Başarılı, bankaya ${miktar} 💸 yatırdın!`)
    );
  }
};

exports.conf = {
  enabled: true,
  aliases: ["dep", "deposit", "yatir"],
};

exports.help = {
  name: 'yatır',
};
