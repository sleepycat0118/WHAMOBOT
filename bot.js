const Discord = require('Discord.js'); 
const client = new Discord.Client();
const config = require("./config.json")


client.on("ready", () => { console.log("I am Ready");});

client.on("message", (message) => {
    if(!msg.content.startsWith(config.prefix)) return; //dont do anything

    if (message.content.startsWith(config.prefix + "mark")) 
    {
        message.channel.send("I have moved the quiz to next week.");
      }

    if (message.content.startsWith(config.prefix + "janet"))
    {
        message.channel.send("Guys, I need you to sign my petition.");
    }

    if (message.content.startsWith(config.prefix + "chris"))
    {
        message.channel.send("WHAMO NO HACKER!");
    }
});

client.login(config.token);
