exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const key = `${message.guild.id}-${message.author.id}`;
    const embed = new Discord.RichEmbed()
        .setTitle(`${message.member.user.username}'s overview`)
        .setAuthor("Overview", "https://i.imgur.com/lm8s41J.png")
        .setColor(0x00AE86)
        .setDescription(`He's piloting a ${client.mechwarriors.get(key,"mech")}`)
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .addField("Mech's condition:")
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addBlankField(true)
        .addField("Head", `${client.mechwarriors.get(key,"core.head")}/${client.mechwarriors.get(key,"armour.head")}`, true)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)


    message.channel.send({
        embed
    });
}