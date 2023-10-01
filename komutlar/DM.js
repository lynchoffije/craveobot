const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply("Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın");
  }

  const members = message.guild.members.cache.filter(member => !member.user.bot).array();

  const dmMessage = args.join(" ");
  let counter = 0;

  for (const member of members) {
    try {
      await member.send(dmMessage);
      console.log(`[${member.user.tag}] Kullanıcısına DM gönderildi.`);
      counter++;

      if (counter < members.length) {
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    } catch (error) {
      console.error(`[${member.user.tag}] Kullanıcısına DM gönderirken bir hata oluştu: ${error}`);
    }
  }

  message.reply("Sunucudaki üyelere DM gönderildi");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "dm",
  description: "Sunucudaki üyelere DM gönderir",
  usage: "dm [mesaj]"
};
