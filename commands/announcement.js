const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // .announcement title | bericht | kleur | kanaal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet gebruiken!");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik:")
            .setColor("#00fc43")
            .setDescription(`Maak een announcement door gebruik te maken van: \n .announcement title ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "『🔔』berichten";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Bericht")
        .setColor(options.kleur)
        .setDescription(`Bericht van ${message.author} \n\n ${options.titel} \n ${options.bericht}`)
        .setThumbnail();
    
    var channel = message.member.guild.chanels.cache.find(channels => channels.name === options.kanaal);
    if(!channel) return message.reply("Dit kanaal bestaat niet!");
    
    channel.send(announceEmbed);


}

module.exports.help = {
    name: "announcement"
}