exports.run = async (client, message, args) => {
    const mechs = client.mechs;
    const user = message.author.id;
    const key = `${message.guild.id}-${user}`;
    const currentMech = await client.mechwarriors.get(key, "mech");
    let entity;
    for (let mech of mechs) {
        if (mech.name.toLowerCase() == args[0].toLowerCase() || mech.alias.toLowerCase() == args[0].toLowerCase()) {
            entity = mech;
        }
    }

    if (entity == null) return message.reply(`There's no such thing as ${args[0]} in the shop`);
    const cost = entity.cost;
    let currentBalance = parseInt(client.mechwarriors.get(key, "cbills"), 10);
    if (cost > currentBalance) return message.reply(`The ${entity.name} costs ${cost} C-Bills while you have only ${currentBalance} C-Bills`);
    message.channel.send(`Are you sure that you want to buy ${entity.name} ${entity.alias} for ${entity.cost} C-Bills? (React with 👍 to the previous message)`);
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
            currentBalance -= cost;
            client.mechwarriors.set(key, entity.name, "mech");
            message.channel.send("Bought it!");
        })
        .catch(collected => {
            return message.channel.send("Time run out!");
        });

    //Trade-in:
    console.log(currentMech);
    console.log(currentBalance);
    const currentMechWorth = 0;
    if (currentMech != null) {
        for (let mech of mechs) {
            if (currentMech == mech.name) {
                currentMechWorth = mech.cost;
            }
        }
    }
    currentBalance += currentMechWorth;
    await client.mechwarriors.set(key, currentBalance, "cbills");
}