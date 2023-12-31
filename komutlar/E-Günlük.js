const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (client, message) => {
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let times = await db.fetch(`worktime_${message.author.id}`);
  let day = 86400000;

  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(
          `⏱ Günlük ödülünü almak için ${
            time.hours ? time.hours + " saat," : ""
          } ${time.minutes ? time.minutes + ' dakika,' : ''} ${
            time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'
          }`
        )
    );
  }

  let moneys = rastgeleMiktar(2300, 2700);
  db.set(`worktime_${message.author.id}`, Date.now());
  db.add(`para_${message.author.id}`, moneys);

  return message.channel.send(
    new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription(`Günlük ödülünü topladın, cüzdanına ${moneys} 💸 eklendi!`)
  );
};

exports.conf = {
  enabled: true,
  aliases: ["gunluk"],
};

exports.help = {
  name: 'günlük',
};
