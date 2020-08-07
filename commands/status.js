exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const Canvas = require('canvas');

    const canvas = Canvas.createCanvas(500, 400);
    const ctx = canvas.getContext('2d');

    // ctx.fillStyle = '#fff';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    const wt = 230,
        ht = 320;

    const test = await Canvas.loadImage('./assets/HeadCore.png');
    ctx.drawImage(test, 0, 0, wt, ht);
    const test1 = await Canvas.loadImage('./assets/CenterTorsoCore.png');
    ctx.drawImage(test1, 0, 0, wt, ht);
    const test2 = await Canvas.loadImage('./assets/LeftTorsoCore.png');
    ctx.drawImage(test2, 0, 0, wt, ht);
    const test3 = await Canvas.loadImage('./assets/RightTorsoCore.png');
    ctx.drawImage(test3, 0, 0, wt, ht);
    const test4 = await Canvas.loadImage('./assets/LeftArmCore.png');
    ctx.drawImage(test4, 0, 0, wt, ht);
    const test5 = await Canvas.loadImage('./assets/RightArmCore.png');
    ctx.drawImage(test5, 0, 0, wt, ht);
    const test6 = await Canvas.loadImage('./assets/LeftLegCore.png');
    ctx.drawImage(test6, 0, 0, wt, ht);
    const test7 = await Canvas.loadImage('./assets/RightLegCore.png');
    ctx.drawImage(test7, 0, 0, wt, ht);

    // const background = await Canvas.loadImage('./wallpaper.jpg');
    // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'test.png');
    message.channel.send(`Test!`, attachment);

}