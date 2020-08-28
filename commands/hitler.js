module.exports = {
    name: "hitler",
    description: "mama tua mae", 
    aliases: ["nazismo", "nazi"],
    run: async(client, message, args) => {
        message.channel.send({
            embed: {
                color: '#00FF7F',
                description:'sim',
                image: {
                    "url":"https://cdn.discordapp.com/attachments/713957167178186752/747986090488758332/unknown.png"
                },
                timestamp: new Date()
            }
        })
    }
}