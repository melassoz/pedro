module.exports = {
    name: "pedro", //nome do comando
    description: "mostra uma gif do pedro", //descrição do comando
    aliases: ["pedroo"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#000080',
                title: "vai se fude vei",
                image: {
                    "url":"https://i.pinimg.com/originals/bb/e7/31/bbe7317720fbb8a722790c78fd785298.gif"
                },
                timestamp: new Date(),
            }
        })
    }
}







/*    module.exports = {
        name: "avatar", //nome do comando
        description: "", //descrição do comando
        aliases: [""],
        run: async(client, message, args) => { //funções do comando
                if(!message.mentions.users.first()){
                    message.channel.send({
                        embed: {
                        color: '#87CEFA',
                        title: "avatar",
                        description: `${user.tag} avatar`,
                        image: message.author.displayAvatarURL()
                }
            })
        }
    }
};*/






/*const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }

    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});*/
