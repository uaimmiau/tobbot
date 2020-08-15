exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const weapons = client.weapons;
    let entity = 0;

    if (args[0] != null) {
        entity = args[0].toLowerCase();
    }

    if (entity === 0) {
        message.channel.send({
            embed: {
                color: Math.floor(Math.random() * 9999999),
                title: `Let's see what we have in stock:`,
                description: `Just the weapons and equpiment you need`,
                timestamp: new Date(),
            },
        });
        for (let weapon of weapons) {
            const embed = new Discord.RichEmbed()
                .setTitle(`${weapon.name} \u00A0 ${weapon.code}`)
                .setColor(`0x${weapon.color}`)
                .setDescription(`Made by ${weapon.manufacturer}`)
                .addField(`Weapon type:`, `${weapon.type}`, true)
                .addField(`Tonnage:`, `${weapon.tonnage}t`, true)
                .addField(`Heat generation:`, `${weapon.heatG}`, true)
                .addField(`Damage:`, `Direct: ${weapon.directD} \n Heat: ${weapon.heatD}`, true)
                .addField(`Modifiers:`, `Accuracy: ${weapon.accuracyM} \n Critical: ${weapon.criticalM}%`, true)
                .addField(`Shots in a salvo: `, `${weapon.salvo}`, true)
                .addField(`Range:`, `-----------------------------------------------`)
                .addField(`Minimal:`, `${weapon.minR}m`, true)
                .addField(`Optimal:`, `${weapon.optR}m`, true)
                .addField(`Maximal:`, `${weapon.maxR}m`, true)
                .addField(`Cost:`, `${weapon.cost} C-Bills`);
            message.channel.send({
                embed,
            });
        }
    } else {
        for (let weapon of weapons) {
            if (weapon.name.toLowerCase() == entity || weapon.code.toLowerCase() == entity) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${weapon.name} \u00A0 ${weapon.code}`)
                    .setColor(`0x${weapon.color}`)
                    .setDescription(`Made by ${weapon.manufacturer}`)
                    .addField(`Weapon type:`, `${weapon.type}`, true)
                    .addField(`Tonnage:`, `${weapon.tonnage}t`, true)
                    .addField(`Heat generation:`, `${weapon.heatG}`, true)
                    .addField(`Damage:`, `Direct: ${weapon.directD} \n Heat: ${weapon.heatD}`, true)
                    .addField(`Modifiers:`, `Accuracy: ${weapon.accuracyM} \n Critical: ${weapon.criticalM}%`, true)
                    .addField(`Shots in a salvo: `, `${weapon.salvo}`, true)
                    .addField(`Range:`, `-----------------------------------------------`)
                    .addField(`Minimal:`, `${weapon.minR}m`, true)
                    .addField(`Optimal:`, `${weapon.optR}m`, true)
                    .addField(`Maximal:`, `${weapon.maxR}m`, true)
                    .addField(`Cost:`, `${weapon.cost} C-Bills`);
                message.channel.send({
                    embed,
                });
            }
        }
    }
}