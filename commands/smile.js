module.exports = {
    name: "smile", //nome do comando
    description: "mama tua mae", //descrição do comando
    aliases: ["sorrir"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
             color: '#D2691E',
             description: `**${message.author.username}** sorrisinho pra tu`,
             image: { 
                "url": "https://media2.giphy.com/media/J5nvj5lh8kgGk/giphy.gif"
             },
             timestamp: new Date(),
            }
        })
    }
}