const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedekonomi = new Discord.MessageEmbed()
    .setAuthor(`Craveo  | Ekonomi`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setImage('https://cdn.discordapp.com/attachments/1154394792139161600/1154799118200360980/craveo-banner.gif')
   .setThumbnail(client.user.avatarURL())
    .setDescription(
      `💰 Craveo  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Günlük__`,
      `🤑 \`${prefix}günlük\` 24 Saat Aralıkla 2300-2700 Arası Para Kazanırsınız.`,
      true
    )
    .addField(
      `__Para__`,
      `🤑 \`${prefix}para\` Etiketlediğiniz Kişinin veya Kendi Paranızı Görürsünüz.`,
      true
    )
    .addField(
      `__Gönder__`,
      `🤑 \`${prefix}gönder\` Etiketlediğiniz Kullanıcıya Para Gönderirsiniz.`,
      true
    )
    .addField(
      `__Soygun__`,
      `🤑 \`${prefix}soygun\` 14 Dakikada Bir Soygun Yaparsınız.`,
      true
    )
    .addField(
      `__Çalış__`,
      `🤑 \`${prefix}çalış\` Rastgele Bir İşte Çalışıp Maaş Alırsınız.`,
      true
    )
    .addField(
      `__Yatır__`,
      `🤑 \`${prefix}yatır\` Kendi Cüzdanınızdan Bankaya Para Yatırırsınız.`,
      true
    )
    .addField(
      `__Yatır__`,
      `🤑 \`${prefix}çek\` Bankadan Kendi Cüzdanınıza Para Çekersiniz.`,
      true
    )
    .addField(
      `__Çal__`,
      `🤑 \`${prefix}çal\` Etiketlediğiniz Kişinin Cüzdanından Para Çalarsınız.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `📙 \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📙 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz`
    );
  return message.channel.send(embedekonomi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ekonomi",
  description: "Ekonomi Menüsü",
  usage: "ekonomi"
};
