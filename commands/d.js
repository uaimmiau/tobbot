exports.run = (client, message, args) => {
    var roll = Math.floor((Math.random() * args[0]) + 1);
    message.channel.send(`You have rolled a ${roll} on a d${args[0]}`);
}