exports.run = async (client, message, args) => {
    let roll = Math.floor((Math.random() * args[0]) + 1);
    let user;
    if (args[1]) {
        user = args[1];
    } else {
        user = message.member.user.username
    }
    message.channel.send(`${user} has rolled a ${roll} on a d${args[0]}`);
    return roll;
}