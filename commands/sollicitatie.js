const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setDescription("Solliciteren? Dat kan! Eenheden die open zijn: KMar, BRW, DVP, AMB, RWS, POL. Ticket maken met **.new**!")
    .setColor("#008cff")

return message.channel.send(botEmbed);
    
}

module.exports.help = {
    name: "sollicitatie"
}