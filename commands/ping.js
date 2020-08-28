module.exports = {
    name: "ping", //nome do comando
    description: "apresenta a quantos ms o bot está", //descrição do comando
    aliases: ["pingpong"], //sub-nome do comando
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
             color: '#BC8F8F',
             title: "Ping?",
             description: `Pong! ${new Date() - message.createdTimestamp}ms`,
            },
             timestamp: new Date(),
        })
    }
}