module.exports = {
    name: "hug", //nome do comando
    description: "mama tua mae", //descrição do comando
    aliases: ["abraço"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#4B0082',
                description: `**${message.author.username}** toma um abraço`,
                image: {
                    "url":"https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_00.gif"
                },
                timestamp: new Date()
            }
        })
    }
}