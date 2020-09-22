const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    if(message.member.hasPermission("MANAGE_PERMS"))
    var trainingEmmbed = new discord.MessageEmbed()
        .setTitle("Eenheidskiezer")
        .setDescription("Voer het cijfer in van je eenheid.")
        .setColor("#00a2ed")
        .setFooter("Made by SyntaxErroR#0001", "https://cdn.discordapp.com/attachments/731971488416268288/754327659982487632/Untitled6.png")
        .addFields(
            { name: "1", value: "Ambulance" },
            { name: "2", value: "Brandweer" },
            { name: "3", value: "Dienst Verkeerspolitie" },
            { name: "4", value: "Dienst Speciale Interventies" },
            { name: "5", value: "Koninklijke Marchaussee" },
            { name: "6", value: "Politie" },
            { name: "7", value: "Rijkswaterstaat" },
        )
    message.channel.send(trainingEmmbed)
}

module.exports.help = {
    name: "training"
}