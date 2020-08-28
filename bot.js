const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = require("./config.json");
const token = require("./token.json");
const fs = require("fs");

client.commands = new Discord.Collection();
client.config = config;

fs.readdir("./events/", (err, files) => {
  if(err) return console.log("Oopies deu erro aqui ... hehe")
 files.forEach(file => {
   const event = require(`./events/${file}`);
   let eventName = file.split(".")[0];
   client.on(eventName, event.bind(null, client));
 })
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
 
    let props = require(`./commands/${file}`)
   
    let commandName = file.split(".")[0];
 
    client.commands.set(props.name, props)
    const aliases = Object.values(props.aliases || [])
    if(aliases) {
      aliases.forEach(alias => client.commands.set(alias, props))
    }
  });
});

client.on("ready", () => {
    console.log(`shrek peruano, respeitar ok.`)
    client.user.setActivity(`BCU`)
});


client.login(token.token);