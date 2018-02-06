const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')
const config = require("./config.json");
var prefix = config.prefix1

 



            bot.on('message', message => {
                var guild = message.guild;
                var embed = new Discord.RichEmbed();
               if(message.author !== bot.user) return;
                if (message.content.toLowerCase() === prefix + "members") {
                    message.delete();
                    embed.setColor('BLUE');
                    embed.setDescription('Total Members : ' + guild.memberCount + '\nOnline Members : ' + guild.members.filter(m => m.presence.status === "online").size + '\nIdle Members : ' + guild.members.filter(m => m.presence.status === "idle").size + '\nDo Not Disturb Members : ' + guild.members.filter(m => m.presence.status === "dnd").size + '\nOffline Members : ' + guild.members.filter(m => m.presence.status === "offline").size + '\nBot Members : ' + guild.members.filterArray(a => a.user.bot).length + '\nHuman Members : ' + Math.floor(guild.memberCount - guild.members.filterArray(a => a.user.bot).length));
                    message.channel.send({embed});
                }})


bot.on('message', message => {

    var guild = message.guild;

    var author = message.author;

    var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }

    if (message.content.startsWith(prefix + 'setplayingstatus')) {

               if(message.author !== bot.user) return;
message.delete()
            

        bot.user.setGame(g)

        var embed = new Discord.RichEmbed();

        if (message.author.bot) return;

        embed.setColor('BLUE');

        embed.setDescription("Playing status set to**" + g + "**");

      message.channel.send({embed});

    }   
})


                          bot.on('message' , async message => {

                var embed = new Discord.RichEmbed();                                                        
               if(message.author !== bot.user) return;

                if (message.content.toLowerCase() === prefix + "ping") {
message.delete()
   		const m = await message.channel.send("Ping?");

    		var ping = Math.round(m.createdTimestamp - message.createdTimestamp)

                    embed.setColor('BLUE');

                    embed.setDescription("Latency ping " + ping + "ms\nApi ping " + Math.round(bot.ping) + 'ms')

                    m.edit({embed});

                }});           
 
 
 
 
             bot.on('message', message => {

                var guild = message.guild;

                var author = message.author;

                var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
  if(message.author !== bot.user) return;
                if (message.content.toLowerCase().startsWith(prefix + 'say')) {

                    message.delete();

                    var embed = new Discord.RichEmbed();

                    if (message.author.bot) return;

                    embed.setColor('BLUE');



                    embed.setDescription(g);

                  message.channel.send({embed});

                }

            });

bot.on('message', message => {
    let guild = message.guild
    var user = message.mentions.users.first();
    var embed = new Discord.RichEmbed();
    if(message.author !== bot.user) return
    if (message.content.toLowerCase().startsWith(prefix + 'permissions') && user) { 
    message.delete()
    user.createDM()
    embed.setTitle("EssentialsPE")
    embed.setColor("BLUE")
    embed.setDescription("`essentials.fly` - **/fly**\n`essentials.teleport` - **/teleport**\n`essentials.tempban` - **/tempban**")
    user.send({embed});
    
    user.createDM()
    embed.setTitle("PocketMine")
    embed.setColor("BLUE")
    embed.setDescription("`pocketmine.command.kick` - **/kick**\n`pocketmine.command.ban` - **/ban**\n`pocketmine.command.ban.ip` - **/ban-ip**")
    user.send({embed});
    } 
});

bot.login(process.env.BOT_TOKEN)
