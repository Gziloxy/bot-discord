const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./storage/config.json")

client.on('message', message => {
    if (message.content === 'Shaula') {
        message.channel.send('Je Fonctionne !');
    }})

client.on('message', message => {
    if (message.content === '!help') {
        message.channel.send('En cour de rédaction ... (création du site internet !)');
    }})


    client.on('message', message => {
      if (message.content === 'efface le statu') {
        client.user.setStatus('ONLINE')
        client.user.setActivity()
        message.channel.send('Statut effacé');
        
      }})

      client.on('message', message => {
        if (message.content === 'mes le statu') {
          client.user.setStatus('ONLINE')
          client.user.setActivity('martyriser Gziloxy')
          message.channel.send('Statut créer');
          
        }})
            
    client.on('ready', () => {
        console.log('JE SUIS ALLUMER GZILOXY');
        client.user.setStatus('ONLINE')
        client.user.setActivity("martyriser Gziloxy")
        
      });
      
      //kick

      client.on('message', message => {
        if (!message.guild) return;
        if (message.content.startsWith('kick')) {
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Aie, vous n'avez pas la permission d'utiliser cette commande !")
              member
                .kick("")
                .then(() => {
                  message.reply(`${user.tag} à été kick !`);
                })
                .catch(err => {
                  message.channel.send('Je ne peux pas kick cette personne !');
                  console.error(err);
                });
            } else {
              message.channel.send("Cette personne n'est pas sur le serveur");
            }
          } else {
            message.channel.send("Pour kick, veuillez mentionner la personne !");
          }
        }
      });

      //ban


      client.on('message', message => {
        if (!message.guild) return;
          if (message.content.startsWith('ban')) {
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Aie, vous n'avez pas la permission d'utiliser cette commande !")
              member
                .ban({
                  reason: '',
                })
                .then(() => {
                  message.channel.send(`${user.tag} banni avec succès`);
                })
                .catch(err => {
                  message.channel.send('Je ne peux pas ban cette personne !');
                  console.error(err);
                });
            } else {
              message.channel.send("Cette personne n'est pas sur le serveur");
            }
          } else {
            message.channel.send("Pour ban, veuillez mentionner la personne !");
          }
        }
      });


client.login(config.token);
