const Discord = require('discord.js');
const db = require('quick.db');
const ms_2 = require('parse-ms');

exports.run = async (client, message, args) => {
  let user = message.author;
  let timeout = 840000;

  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let crime = await db.fetch(`clubagitme_${message.author.id}`);

  if (crime !== null && timeout - (Date.now() - crime) > 0) {
    let time = ms_2(timeout - (Date.now() - crime));
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setDescription(`⏱ Cluba gitmek için ${
          time.minutes ? time.minutes + ' dakika,' : ''
        } ${
          time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'
        }`)
    );
  } else {
    const result = ["WINWIN", "LOOSELOOSE"];
    let awnser = result[Math.floor(Math.random() * result.length)];

    let kazanmaMesajları = [
      "Cluba gittin ve meyve tabağı önüne geldi harika bir zaman geçirdin",
      "Clubda dans ederken büyük bir ödül kazandın",
      "Cluba gittin ve arkadaşlarınla eğlenceli bir gece geçirdin",
      "Arkadaşların Rus kadınlar ayarladı ve muhteşem bir gece geçirdin"
    ];

    let kaybetmeMesajları = [
      "Cluba gittin ama hesabı sana ödettiler",
      "Cluba gitmeye çalışırken yere düştün ve para kaybettin",
      "Cluba gittin ama pek eğlenemedin",
      "Arkadaşların Rus kadınları aldı ve mekandan ayrıldı hesabı sen ödemek zorunda kaldın"
    ];

    let cümle;
    let miktar;

    if (awnser === "LOOSELOOSE") {
      miktar = rastgeleMiktar(400, 900);
      cümle = kaybetmeMesajları[Math.floor(Math.random() * kaybetmeMesajları.length)];
      await db.add(`para_${user.id}`, -miktar);
    } else {
      miktar = rastgeleMiktar(800, 1700);
      cümle = kazanmaMesajları[Math.floor(Math.random() * kazanmaMesajları.length)];
      await db.add(`para_${user.id}`, miktar);
    }

    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(awnser === "LOOSELOOSE" ? "RED" : "GREEN")
      .setDescription(`${cümle} ve ${miktar} 💸 ${awnser === "LOOSELOOSE" ? "kaybettin!" : "kazandın!"}`);
    
    message.channel.send(embed);
    await db.set(`clubagitme_${user.id}`, Date.now());
  }
};

exports.conf = {
  enabled: true,
  aliases: ["clubagit", "cluba-git"],
};

exports.help = {
  name: 'cluba-git',
};
