module.exports = {
    name: "salve", //nome do comando
    description: "nene", //descrição do comando
    aliases: ["barreto", "salvebarreto"],
    run: async(client, message, args) => { //funções do comando
        message.channel.send({
            embed: {
             color: '#4B0082',
             description: `salve barreto`,
             image: { 
                "url": "https://http2.mlstatic.com/barril-de-carvalho-de-200-litros-prontos-para-envelhecer-D_NQ_NP_882485-MLB29493833449_022019-F.jpg"
             },
             timestamp: new Date(),
            }
        })
    }
}