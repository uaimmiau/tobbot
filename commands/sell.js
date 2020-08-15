exports.run = async (client, message, args) => {
    if (args[0] == null) return message.reply("You have to provide me with the desired items codename");

    const user = message.author.id;
    const key = `${message.guild.id}-${user}`;
    let inv = await client.mechwarriors.get(key, "inventory");
    let entity;
    for (let item of inv) {
        if (item.toLowerCase() == args[0].toLowerCase()) {
            entity = item;
        }
    }
    if (entity == null) return message.reply(`There's no such thing as ${args[0]} in your inventory`);

    client.mechwarriors.remove(key, entity, "inventory");
}