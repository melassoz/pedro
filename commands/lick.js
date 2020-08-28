module.exports = {
    name: "lick", //nome do comando
    description: "mama tua mae", //descrição do comando
    aliases: ["lambe"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
             color: '#00FF7F',
             description: `**${message.author.username}** lambe lambe`,
             image: { 
                "url": "https://media1.tenor.com/images/b5d187d375f2c60d77971c5cfdc40457/tenor.gif?itemid=16189423"
             },
             timestamp: new Date(),
            }
        })
    }
}