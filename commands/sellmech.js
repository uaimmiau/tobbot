exports.run = async (client, message, args) => {
    const mechs = client.mechs;
    const user = message.author.id;
    const key = `${message.guild.id}-${user}`;
    const currentMech = await client.mechwarriors.get(key, "mech");
    if (currentMech == null) return message.reply("You don't have a mech!");
    let entity;
    for (let mech of mechs) {
        if (currentMech == mech.name) {
            entity = mech;
        }
    }
    const cost = entity.cost;
    let currentBalance = parseInt(client.mechwarriors.get(key, "cbills"), 10);
    message.channel.send(`Are you sure that you want to sell ${entity.name} ${entity.alias} for ${entity.cost} C-Bills? (React with 👍 to the previous message)`);
    message.react('👍');
    const filter = (reaction, user) => {
        return reaction.emoji.name === '👍' && user.id === message.author.id;
    };
    await message.awaitReactions(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
        })
        .then(collected => {
            currentBalance += cost;
            client.mechwarriors.set(key, "", "mech");
            message.channel.send("Sold it!");
        })
        .catch(collected => {
            return message.channel.send("Time run out!");
        });
    await client.mechwarriors.set(key, currentBalance, "cbills");
}