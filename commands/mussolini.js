module.exports = {
    name: "mussolini", //nome do comando
    description: "mussum", //descrição do comando
    aliases: [],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#FF4500',
                image: {
                    "url":"https://media.tenor.com/images/ce3e52561f5869af6de5ca360bdfd71b/tenor.gif"
                },
                timestamp: new Date()
            }
        })
    }
}
