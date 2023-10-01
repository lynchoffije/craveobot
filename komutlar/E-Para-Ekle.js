const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let money = args[1];

  if (message.author.id !== ayarlar.sahip && !ayarlar.sahip2) return message.react("❌");

  if (!user) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(`Cüzdanına para ekleyeceğin kişiyi etiketlemelisin!`)
    );
  }

  if (!args[1] || isNaN(args[1]) || args[1] < 0) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(`⛔ Cüzdana geçerli bir para miktarı girmelisin!`)
    );
  }

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("GREEN")
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription(`✅ ${user} kullanıcısının cüzdanına ${money} 💸 eklendi!`)
  );

  db.add(`para_${user.id}`, money);
};

exports.conf = {
  enabled: true,
  aliases: ["paraekle"],
};

exports.help = {
  name: 'para-ekle',
};
