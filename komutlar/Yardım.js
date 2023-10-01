const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Craveo`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(client.user.avatarURL())
   .setImage('https://cdn.discordapp.com/attachments/1154394792139161600/1154799118200360980/craveo-banner.gif')
    .setDescription(
      `🎧 Craveo Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `💬 \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayar Komutları__`,
      `⚙️  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Öneri__`,
      `🔰 \`${prefix}öneri-sistem\`  `,
      true
    )
    .addField(
      `__Seviye__`,
      `⚙️ \`${prefix}seviye-sistem\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutları__`,
      `🌀 \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oto Rol__`,
      ` 🎮 \`${prefix}otorol-sistem\` `,
      true
    )
    .addField(
      `__Ticket__`,
      `🎉 \`${prefix}ticket-sistem\` `,
      true
    )
    .addField(
      `__Sistemler__`,
      `🎏 \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutları__`,
      `🎲 \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Oyun Komutları__`,
      `🕹️ \`${prefix}oyunlar\``,
      true
    )
    .addField(
      `__Ekonomi Komutları__`,
      `💰 \`${prefix}ekonomi\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
