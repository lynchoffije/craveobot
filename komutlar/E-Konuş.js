const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const googleTTS = require("google-tts-api");

function splitText(text, maxLength) {
  const splitRegex = new RegExp(`.{1,${maxLength}}`, "g");
  const parts = text.match(splitRegex);
  return parts || [];
}

exports.run = async (client, message, args) => {
  if (!message.guild) return;

  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();

    const userMessage = args.join(" ");

    if (!userMessage) {
      const errorEmbed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(`Lütfen bir metin girin.`);
      
      return message.channel.send(errorEmbed);
    }

    const maxLength = 200;
    const messageParts = splitText(userMessage, maxLength);

    for (const messagePart of messageParts) {
      const url = googleTTS.getAudioUrl(messagePart, {
        lang: "tr",
        slow: false,
        host: "https://translate.google.com",
      });

      const dispatcher = connection.play(url);

      await new Promise(resolve => {
        dispatcher.on("finish", () => {
          resolve();
        });
      });
    }

    connection.disconnect();
  } else {
    const errorEmbed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Lütfen bir sesli kanala katılın.`);
    
    message.channel.send(errorEmbed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "konuş",
  description: "Kullanıcının girdiği metni sesli olarak söyler",
  usage: "konuş [metin]"
};
