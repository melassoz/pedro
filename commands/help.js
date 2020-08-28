module.exports = {
    name: "help", 
    description: "exibe a lista de comandos do bot", 
    aliases: ["ajuda"],
    run: async(client, message, args) => { 
        message.channel.send({
            embed: {
                color: '#F08080',
                title: "Comandos",
                thumbnail: {
                    "url":"https://i.pinimg.com/originals/00/91/6c/00916c7a70fb10e8fdf5404a51c1ac0a.gif"
                },
                description: "Pedro é um simples bot programado para o pedroverso, segue seus comandos:",
                fields: [
                    {
                        name: '<a:rainbow_hype:747811826850594906> Ações:',
                        value: '`hug` `kiss` `lick` `pat` `mamada` `say` `smile` `pedro`',
                        inline: false,
                    },
                    {
                        name: '<a:rainbow_blblbl:747811826779291700> Informações',
                        value: '`ping` `help` `avatar` `facismo` `twitch.tv/drackkoo` `alvin` `hitler` `salve` `cenoura`',
                        inline: false,
                    },
                    {
                        name: '<a:awoconi:747811828658208778> Convite',
                        value: '`invite` ou clique [aqui](https://discord.com/oauth2/authorize?client_id=706339632190849095&scope=bot&permissions=2146958847)',
                        inline: false,
                    },
                    {
                        name: '<a:cat_glitchy:747811826586091681> Especiais',
                        value:'`facismo` `twitch.tv/drackkoo` `alvin` `hitler` `salve` `cenoura` `salt`',
                        inline: false,
                    },
                    {
                        name: '<a:joao:747811829668905040> Minha autora',
                        value: 'melasso#7863',
                        inline: false,
                    },
                    {
                        name: '<:github:748974734888403041> Github',
                        value: '[pedro](https://github.com/melassoz/pedro)',
                        inline: true, 
                    },
                    {
                        name: '<:js:748974735026552848> Linguagem de programação',
                        value: '[javascript](https://www.javascript.com/)',
                        inline: true,
                    },
                    {
                      name: '<:djs:748975839609094215> Biblioteca',
                      value: '[discord.js](https://discord.js.org/#/)',
                      inline: true,
                    },
                ],
                timestamp: new Date(),
                }
        })
    }
}