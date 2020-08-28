module.exports = {
    name: "invite", //nome do comando
    description: "te passa o link de invite do bot", //descrição do comando
    aliases: ["convite"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#DC143C',
                title: 'Convite!',
                description: "Me adicione em seu servidor clicando [aqui!](https://discord.com/oauth2/authorize?client_id=706339632190849095&scope=bot&permissions=2146958847)",
                timestamp: new Date()
            }
        })
    }
}
