const Discord = require('discord.js');
const { builtinModules } = require('module');
const { type } = require('os');

const client = new Discord.Client();

client.once('ready' , () => {
    console.log('Pret mon gros!');
});

client.on('ready', () => {
    client.user.setActivity(`play.hitokamc.fr`, {type: 'STREAMING', url: 'https://hitokamc.fr/'} );
})

client.on("guildMemberAdd", async (member) => { 

    let guild = await client.guilds.cache.get("902652580516208640");
    let channel = await client.channels.cache.get("902652580516208644");

    if (guild != member.guild) {
      return console.log("Test.");
     } else {

        let embed = await new Discord.MessageEmbed()
        .setColor("#008000")
        .setTitle(`Bienvenue sur HitokaMC`)
        .setDescription(`Bienvenue à ${member.user}, sur le discord **${guild.name}**!\nNous sommes désormais **${member.guild.memberCount}** sur le discord !`)
        .setThumbnail(guild.iconURL())
        .setTimestamp();
        await channel.send(embed)
    }
})
    
client.login(process.env.TOKEN);