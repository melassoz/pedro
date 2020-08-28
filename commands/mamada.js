module.exports = {
    name: "mamada", //nome do comando
    description: "o bot te da uma mamada", //descrição do comando
    aliases: ["memama", "mamadinha","mamar","suga"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#008B8B',
                title: "Quer uma mamada?",
                image: {
                    "url":"https://media3.giphy.com/media/iVxMwQW4pHpL2/giphy.gif"
                },
                description: "glub glub",
                timestamp: new Date(),
            }
        })
    }
}