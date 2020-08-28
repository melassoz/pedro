module.exports = {
    name: "fascismo", //nome do comando
    description: "mama tua mae", //descrição do comando
    aliases: ["fascista"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#00FF7F',
                description: 'fascismo vive',
                image: {
                    "url":"https://media1.tenor.com/images/752aebc54e426c1c2df6a4f054e7bb3a/tenor.gif?itemid=18166259"
                },
                timestamp: new Date()
            }
        })
    }
}