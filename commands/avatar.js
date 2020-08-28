const Discord = require("discord.js");

module.exports = {
    name: "avatar", //nome do comando
    description: "mostra tua imagem", //descrição do comando
    aliases: ["imagem"],
    run: async(client, message, args) => { //funções do comando
        let user =
            message.mentions.users.first() ||
            client.users.cache.get(args[0]) ||
            message.author;

        let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024})
        
        let embed = new Discord.MessageEmbed()
            .setColor('#FF7F50')
            .setTitle(`<a:Cat:747811830797303858> Avatar de ${user.username}`)
            .setImage(avatar)
            .setTimestamp(new Date())

            await message.channel.send(embed); 
    }
}  

