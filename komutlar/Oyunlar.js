const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedoyunlar = new Discord.MessageEmbed()
    .setAuthor(`Craveo  | Oyunlar`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setImage('https://cdn.discordapp.com/attachments/1154394792139161600/1154799118200360980/craveo-banner.gif')
   .setThumbnail(client.user.avatarURL())
    .setDescription(
      `🔔 Craveo  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Bahis__`,
      `🕹️ \`${prefix}bahis\` Bahis Oynarsınız Para Kaybeder veya 2 Katını Kazanırsınız.`,
      true
    )
    .addField(
      `__Slot Machine__`,
      `🕹️ \`${prefix}slots\` Slots Oynarsınız Para Kaybeder veya 2 Katını Kazanırsınız.`,
      true
    )
    .addField(
      `__Balık Tut__`,
      `🕹️ \`${prefix}balıktut\` Balık Tutarsınız Rastgele Para Kazanırsınız veya Kaybedersiniz.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `📙 \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📙 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz`
    );
  return message.channel.send(embedoyunlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "oyunlar",
  description: "Oyunlar Menüsü",
  usage: "oyunlar"
};
