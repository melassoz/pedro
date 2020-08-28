module.exports = {
    name: "twitch.tv/drackkoo", //nome do comando
    description: "nene", //descrição do comando
    aliases: ["franco"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#4B0082',
                description: `**${message.author.username}** bo ve a live do [twitch.tv/drackkoo](https://twitch.tv/drackkoo)`,
                image: {
                    "url":"https://cdn.discordapp.com/avatars/345686460025929729/285867bc05dad4bf6aa243ce7fe38b65.png?size=1024"
                },
                timestamp: new Date()
            }
        })
    }
}