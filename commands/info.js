const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    try{

        var text = "**HULP BOT** \n\n **__Commands__** \n .info - Geeft dit scherm. \n .new -  Maakt een ticket. \n .sollicitatie - Geeft je info over de Sollicitaties. \n .link - Hiermee heb je de invite link van de server. \n\n **__Staff Commands__** \n .training - Hiermee kan je een training inplannen. \n .ban - Hiermee kan je iemand bannen. \n .afmelden - Hiermee kan je je afmelden! \n .aanmelden - Hiermee kan je je aanmelden!"
        
        message.author.send(text);

        message.reply("Alle commands vind je in je prive berichten! 🔏")

    }catch(error){
        message.reply("Er is iets foutsgelopen");
    }
    
}

module.exports.help = {
    name: "info"
}