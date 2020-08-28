module.exports = {
    name: "pat", //nome do comando
    description: "mama tua mae", //descrição do comando
    aliases: ["carinho"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
             color: '#6A5ACD',
             description: `**${message.author.username}** ta carente? toma um carinho`,
             image: { 
                "url": "https://64.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_400.gif"
             },
             timestamp: new Date(),
            }
        })
    }
}