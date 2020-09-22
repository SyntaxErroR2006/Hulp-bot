const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle("DSI Vragen")
            .addFields(
                { name: "Vraag 1", value: "Wat is je Roblox naam?" },
                { name: "Vraag 2", value: "Is je roblox account 13+?" },
                { name: "Vraag 3", value: "Waarom wil je solliciteren?" },
                { name: "Vraag 4", value: "Waarom kies je voor DSI?" },
                { name: "Vraag 5", value: "Som hier een paar begrippen op van DSI." },
                { name: "Vraag 6", value: "Waarvoor staat DSI?" },
                { name: "Vraag 7", value: "Wat betekent AE&OO?" },
                { name: "Vraag 8", value: "Wat betekent AI?" },
                { name: "Vraag 9", value: "Wat betekent AT?" },
                { name: "Vraag 10", value: "Wat betekent BO?" },
                { name: "Vraag 11", value: "Wat betekent ATLAS?" },
                { name: "Vraag 12", value: "Wat is breachen?" },
                { name: "Vraag 13", value: "Wat is BTGV (uitleg+betekenis)" },
                { name: "Vraag 14", value: "Heb jij vragen voor ons?" },
                { name: "Vraag 15", value: "Dit was het!" },
                { name: "Uitslag?", value: "Krijg je snel te horen!" },
            );


        return message.channel.send(botEmbed);


return message.channel.send(botEmbed);
    
}

module.exports.help = {
    name: "dsi"
}