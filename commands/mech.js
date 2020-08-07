exports.run = async (client, message, args) => {
    const mechs = client.mechs;
    const user = message.author.id;
    const key = `${message.guild.id}-${user}`;
    const currentMech = await client.mechwarriors.get(key, "mech");
    let test = client.mechwarriors.get(key, "armour");
    if (currentMech == "") return message.reply("You don't have a mech!");
    message.channel.send(`Your current mech is ${currentMech}`);
}