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
    const armour = await client.mechwarriors.get(key, "armour");
    const core = await client.mechwarriors.get(key, "core");

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

    let test = await Canvas.loadImage("./assets/HeadCore.png");
    ctx.drawImage(test, ix, iy, wt, ht);
    const test1 = await Canvas.loadImage("./assets/CTA.png");
    ctx.drawImage(test1, ix, iy, wt, ht);
    const test2 = await Canvas.loadImage("./assets/CTC.png");
    ctx.drawImage(test2, ix, iy, wt, ht);
    const test3 = await Canvas.loadImage("./assets/RightTorsoCore.png");
    ctx.drawImage(test3, ix, iy, wt, ht);
    const test4 = await Canvas.loadImage("./assets/LeftArmCore.png");
    ctx.drawImage(test4, ix, iy, wt, ht);
    const test5 = await Canvas.loadImage("./assets/RightArmCore.png");
    ctx.drawImage(test5, ix, iy, wt, ht);
    const test6 = await Canvas.loadImage("./assets/LeftLegCore.png");
    ctx.drawImage(test6, ix, iy, wt, ht);
    const test7 = await Canvas.loadImage("./assets/RightLegCore.png");
    ctx.drawImage(test7, ix, iy, wt, ht);

    // const background = await Canvas.loadImage('./wallpaper.jpg');
    // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), "test.png");
    message.channel.send(`Test!`, attachment);
};