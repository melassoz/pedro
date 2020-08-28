module.exports = (client, message) => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(client.config.prefix)) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    const cmd = client.commands.get(`${comando}`) //para encontrar comando
    if (!cmd) return;          
      cmd.run(client, message, args);
};