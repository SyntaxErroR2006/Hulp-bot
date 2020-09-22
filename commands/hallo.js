const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    return message.channel.send(`Hallo, ${message.author.username}`)
    
}

module.exports.help = {
    name: "hallo"
}