exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const mechs = client.mechs;

    message.channel.send({
        embed: {
            color: Math.floor(Math.random() * 9999999),
            title: `Let's see what we have in stock:`,
            description: `Some fine mechs for good price`,
            timestamp: new Date(),
        },
    });
    for (let mech of mechs) {
        const embed = new Discord.RichEmbed()
            .setTitle(`${mech.name} ${mech.alias}`)
            .setColor(0x00ae86)
            .setDescription(`${mech.description}`)
            .addField(`Class: ${mech.class}`, `Speed: ${mech.speed}`)
            .addField(
                "Right Torso",
                `${mech.core.RTorso}/${mech.armour.RTorso}`,
                true
            )
            .addField("Head", `${mech.core.Head}/${mech.armour.Head}`, true)
            .addField("Left Torso", `${mech.core.LTorso}/${mech.armour.LTorso}`, true)
            .addField("Right Arm", `${mech.core.RArm}/${mech.armour.RArm}`, true)
            .addField(
                "Center Torso",
                `${mech.core.CTorso}/${mech.armour.CTorso}`,
                true
            )
            .addField("Left Arm", `${mech.core.LArm}/${mech.armour.LArm}`, true)
            .addField("Right Leg", `${mech.core.RLeg}/${mech.armour.RLeg}`, true)
            .addBlankField(true)
            .addField("Left Leg", `${mech.core.LLeg}/${mech.armour.LLeg}`, true)
            .addField(
                "Ballistic Hardpoints:",
                `RTorso: ${mech.RballisticHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 CTorso: ${mech.CballisticHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 LTorso: ${mech.LballisticHP} `
            )
            .addField(
                "Energy Hardpoints:",
                `RTorso: ${mech.RenergyHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 CTorso: ${mech.CenergyHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 LTorso: ${mech.LenergyHP} `
            )
            .addField(
                "Missile Hardpoints:",
                `RTorso: ${mech.RmissileHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 CTorso: ${mech.CmissileHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 LTorso: ${mech.LmissileHP} `
            )
            .addField(
                "Support Hardpoints:",
                `RTorso: ${mech.RsupportHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 CTorso: ${mech.CsupportHP} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 LTorso: ${mech.LsupportHP} `
            )
            .addField(
                "Tonnage: ",
                `Max tonnage: ${mech.tonnage}t \u00A0\u00A0\u00A0 Base tonnage: ${mech.baseT}t`
            )
            .addField(
                "Heat management:",
                `Max heat cappacity: ${mech.heatCappacity} \u00A0\u00A0\u00A0 Heat dissipation: ${mech.heatEffectivness}`
            )
            .addField("Price: ", `${mech.cost} C-Bills`)
            .setImage(mech.url);
        message.channel.send({
            embed,
        });
    }
};