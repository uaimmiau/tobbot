exports.run = async (client, message, args) => {
    const key = `${message.guild.id}-${message.author.id}`;
    await client.mechwarriors.ensure(key, {
        user: message.author.id,
        cbills: 2000000,
        mech: "",
        armour: {
            Head: "",
            CTorso: "",
            LTorso: "",
            RTorso: "",
            LArm: "",
            RArm: "",
            LLeg: "",
            RLeg: ""
        },
        core: {
            Head: "",
            CTorso: "",
            LTorso: "",
            RTorso: "",
            LArm: "",
            RArm: "",
            LLeg: "",
            RLeg: ""
        },
        inventory: [],
        mountedWeapons: [],
        mountedEqupiment: [],
        fireGroup1: [],
        fireGroup2: [],
        fireGroup3: [],
        attackM: 0,
        defenseM: 0,
        victories: 0
    });
    message.reply(`You have been succesfully initialized!`);
}