const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { join } = require("path");



const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});




client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    let activities = [".help", "Bot maker: SyntaxErroR#0001", "Prefix ."]
    i = 0;
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: activities[i++ % activities.length],
                type: "LISTENING",
                type: "PLAYING",
                type: "WATCHING"
            }
        })
    }, 5000);



});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var args = message.content.split(" ");

    var command = args[0];

    //Command handler

    if(!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, args);






    // 841396330 166562385 

    if (command === `${prefix}hallo`) {
        return message.channel.send(`Hallo, ${message.author.username}`)
    }

    if (command === `fakka`) {
        return message.channel.send(`Fakka neef`)
    }

    if (command === `hi`) {
        return message.channel.send(`Hi, ${message.author.username}`)
    }

    if (command === `hai`) {
        return message.channel.send(`Hai, ${message.author.username}`)
    }

    if (command === `hoi`) {
        return message.channel.send(`Hoi, ${message.author.username}`)
    }

    // -BOT EMBEDS-
    if (command === `${prefix}help`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Info Commands!")
            .setFooter("Made by SyntaxErroR", "https://cdn.discordapp.com/attachments/731971488416268288/754327659982487632/Untitled6.png")
            .setColor("#008cff")
            .setThumbnail("https://cdn.discordapp.com/attachments/731971488416268288/754327659982487632/Untitled6.png")
            .addFields(
                { name: "🧍🏼‍♂️‍Openbaar", value: "`.help\n.sollicitatie\n.new\n.link\nboom`" },
                { name: "📌Moderatie", value: "`.training\n.link\n.ban\n.afmelden\n.aanmelden`" }
            )

        return message.channel.send(botEmbed);
    }

    if (command === `${prefix}warn`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Warn menu")
            .setDescription(`**Naam:** ${messageArray[1]}\n**Type:** ${messageArray[2]}\n**Reden:** ${messageArray[3]}\n**Moderator:** ${messageArray[4]}`)
            .setFooter("Hulp bot.", "https://cdn.discordapp.com/attachments/731971488416268288/754327659982487632/Untitled6.png")
            .setColor("#008cff")


        return message.channel.send(botEmbed);
    }



    if (command === `${prefix}aanmelden`) {

        var botEmbed = new discord.MessageEmbed()
            .setDescription(`${message.author.username} Heeft zich aangemeld! Fijne werkdagen!`)
            .setColor("#008cff")

        return message.channel.send(botEmbed);
    }


    if (command === `${prefix}afmelden`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle(`Afmelding ${message.author.username}`)
            .setDescription(`**Naam:** ${messageArray[1]}\n**NaamRBX:** ${messageArray[2]}\n**Van:** ${messageArray[3]}\n**Tot:** ${messageArray[4]}\n**Reden:** ${messageArray[5]}`)
            .setColor("#008cff")

        return message.channel.send(botEmbed);
    }



    

   

    




    if (command === `${prefix}prefix`) {

        var botEmbed = new discord.MessageEmbed()
            .setDescription(" <:Kruis:754602642470076457>  U hebt geen premium!")
            .setColor("#008cff")

        return message.channel.send(botEmbed);


    }

    if (command === `boom`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("BIEM")
            .setImage("https://cdn.discordapp.com/attachments/704868139921440858/754672757765046342/exploding.gif")
            .setColor("#008cff")

        return message.channel.send(botEmbed);


    }


    if (command === `Biem`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("BIEM")
            .setImage("https://cdn.discordapp.com/attachments/704867759858778142/756601653393752134/TVkW4Y.png")

        return message.channel.send(botEmbed);


    }



    if (command === `${prefix}link`) {

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Discord server link!")
            .setColor("#008cff")
            .setThumbnail("https://cdn.discordapp.com/attachments/731971488416268288/754327659982487632/Untitled6.png")
            .setTimestamp()
            .setDescription("Join gezellig deze server!\nEr is altijd wat te doen!\nZie ik je daar? :)")
            .setURL("https://discord.gg/sfad4pT")
            .setFooter("Made by SyntaxErroR", "https://cdn.discordapp.com/attachments/731971488416268288/754327659982487632/Untitled6.png")

        return message.channel.send(botEmbed);
    }
    // SERVER LINKS
    

    
    










    



});

// -WELKOM COMMAND-
client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('718084332509462609');

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('754342706158764045');

    if (!channel) return;

    // channel.send(`Welkom bij de server ${member}! Voor hulp typ: .help.`);
    
    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hallo! ${member.user.username}, Welkom op bij de server! Info over de bot? typ: .help`)
        .setColor("#30db00")
        .setFooter("Gebruiker gejoined op:")
        .setTimestamp();
    channel.send(joinEmbed);
});



client.on("guildMemberRemove", member => {
;

    var channel = member.guild.channels.cache.get('754342706158764045');

    if (!channel) return;
    
    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Jammer dat ${member.user.username}, weg is!`)
        .setColor("#fc0d00")
        .setFooter("Gebruiker geleaved op:")
        .setTimestamp();
    channel.send(leaveEmbed);
})

