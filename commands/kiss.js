module.exports = {
    name: "kiss", //nome do comando
    description: "te passa o link de invite do bot", //descrição do comando
    aliases: ["bj"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
             color: '#9ACD32',
             description: `**${message.author.username}** toma um beijinho`,
             image: { 
                "url": "https://i.pinimg.com/originals/6a/bd/b9/6abdb9270cf83511962890f957a5cca3.gif"
             },
             timestamp: new Date(),
            }
        })
    }
}

