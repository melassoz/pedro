module.exports = {
    name: "alvin", //nome do comando
    description: "nene", //descrição do comando
    aliases: ["alves"],
    run: async(client, message, args) => { //funções do comando
        
        message.channel.send({
            embed: {
                color: '#4B0082',
                description: `${message.author.username} cumero o alvin`,
                image: {
                    "url":"https://cdn.discordapp.com/attachments/645118931899777040/747209918024646656/unknown.png"
                },
                timestamp: new Date(),
            }
        })
    }
}
