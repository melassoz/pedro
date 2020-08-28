module.exports = {
    name: "say", //nome do comando
    description: "o bot fala algo que você deseja", //descrição do comando
    aliases: ["fala"],
    run: async(client, message, args) => { //funções do comando
        let texta = message.content.substring(5)
        message.channel.send(texta)
        message.delete()
    }
}