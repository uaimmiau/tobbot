exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    const Canvas = require("canvas");
    const mechs = client.mechs;


    let user;
    if (args[0] == null) {
        user = message.author.id;
        args[0] = message.author.username;
    } else if (args[0].startsWith("<")) {
        user = args[0].slice(3, args[0].length - 1);
        args[0] = message.author.username;
    } else {
        let temp = client.users.find(user => user.username == args[0])
        user = temp.id;
    }
    const key = `${message.guild.id}-${user}`;
    const currentMech = await client.mechwarriors.get(key, "mech");
    if (currentMech == "") return message.channel.send("You don't have a mech!");
    const armour = await client.mechwarriors.get(key, "armour");
    const core = await client.mechwarriors.get(key, "core");
    let mArmour, mCore;
    for (let mech of mechs) {
        if (mech.name == currentMech) {
            mArmour = mech.armour;
            mCore = mech.core;
        }
    }


    const canvas = Canvas.createCanvas(700, 450);
    const ctx = canvas.getContext("2d");

    // ctx.fillStyle = '#fff';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '50px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${args[0]}'s ${currentMech}`, 0, 50);

    const ix = 0,
        iy = 80,
        wt = 230,
        ht = 320;
    //Pato-rysowanie statusu
    //Head
    let img = await Canvas.loadImage("./assets/HC.png");
    ctx.globalAlpha = core.Head / mCore.Head;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/HA.png");
    ctx.globalAlpha = armour.Head / mArmour.Head;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Center Torso
    img = await Canvas.loadImage("./assets/CTC.png");
    ctx.globalAlpha = core.CTorso / mCore.CTorso;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/CTA.png");
    ctx.globalAlpha = armour.CTorso / mArmour.CTorso;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Left Torso
    img = await Canvas.loadImage("./assets/LTC.png");
    ctx.globalAlpha = core.LTorso / mCore.LTorso;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/LTA.png");
    ctx.globalAlpha = armour.LTorso / mArmour.LTorso;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Right Torso
    img = await Canvas.loadImage("./assets/RTC.png");
    ctx.globalAlpha = core.RTorso / mCore.RTorso;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/RTA.png");
    ctx.globalAlpha = armour.RTorso / mArmour.RTorso;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Left Arm
    img = await Canvas.loadImage("./assets/LAC.png");
    ctx.globalAlpha = core.LArm / mCore.LArm;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/LAA.png");
    ctx.globalAlpha = armour.LArm / mArmour.LArm;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Right Arm
    img = await Canvas.loadImage("./assets/RAC.png");
    ctx.globalAlpha = core.RArm / mCore.RArm;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/RAA.png");
    ctx.globalAlpha = armour.RArm / mArmour.RArm;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Left Leg
    img = await Canvas.loadImage("./assets/LLC.png");
    ctx.globalAlpha = core.LLeg / mCore.LLeg;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/LLA.png");
    ctx.globalAlpha = armour.LLeg / mArmour.LLeg;
    ctx.drawImage(img, ix, iy, wt, ht);
    //Right Leg
    img = await Canvas.loadImage("./assets/RLC.png");
    ctx.globalAlpha = core.RLeg / mCore.RLeg;
    ctx.drawImage(img, ix, iy, wt, ht);
    img = await Canvas.loadImage("./assets/RLA.png");
    ctx.globalAlpha = armour.RLeg / mArmour.RLeg;
    ctx.drawImage(img, ix, iy, wt, ht);







    // const background = await Canvas.loadImage('./wallpaper.jpg');
    // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), "status.png");
    message.channel.send(`Test!`, attachment);
};