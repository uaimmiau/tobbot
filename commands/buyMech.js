exports.run = async (client, message, args) => {
    if (args[0] == null) return message.reply("You have to provide me with the desired mechs name");

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
            client.mechwarriors.set(key, entity.armour.Head, "armour.Head");
            client.mechwarriors.set(key, entity.armour.CTorso, "armour.CTorso");
            client.mechwarriors.set(key, entity.armour.LTorso, "armour.LTorso");
            client.mechwarriors.set(key, entity.armour.RTorso, "armour.RTorso");
            client.mechwarriors.set(key, entity.armour.LArm, "armour.LArm");
            client.mechwarriors.set(key, entity.armour.RArm, "armour.RArm");
            client.mechwarriors.set(key, entity.armour.LLeg, "armour.LLeg");
            client.mechwarriors.set(key, entity.armour.RLeg, "armour.RLeg");
            client.mechwarriors.set(key, entity.core.Head, "core.Head");
            client.mechwarriors.set(key, entity.core.CTorso, "core.CTorso");
            client.mechwarriors.set(key, entity.core.LTorso, "core.LTorso");
            client.mechwarriors.set(key, entity.core.RTorso, "core.RTorso");
            client.mechwarriors.set(key, entity.core.LArm, "core.LArm");
            client.mechwarriors.set(key, entity.core.RArm, "core.RArm");
            client.mechwarriors.set(key, entity.core.LLeg, "core.LLeg");
            client.mechwarriors.set(key, entity.core.RLeg, "core.RLeg");
            message.channel.send("Bought it!");
        })
        .catch(collected => {
            return message.channel.send("Time run out!");
        });

    //Trade-in:
    let currentMechWorth = 0;
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