module.exports = {
    name: "cenoura", //nome do comando
    description: "cenoura", //descrição do comando
    aliases: ["arthur"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
                color: '#FF4500',
                image: {
                    "url":"https://atacarejoibatiba.com.br/wp-content/uploads/2017/10/cenoura.png"
                },
                timestamp: new Date()
            }
        })
    }
}
