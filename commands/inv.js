exports.run = async (client, message, args) => {
    let user;
    if (args[0] == null) {
        user = message.author.id;
    } else if (args[0].startsWith("<")) {
        user = args[0].slice(3, args[0].length - 1);
    } else {
        let temp = client.users.find(user => user.username == args[0])
        user = temp.id;
    }
    const key = `${message.guild.id}-${user}`;
    message.channel.send({
        embed: {
            color: Math.floor(Math.random() * 9999999),
            title: `${message.member.user.username}'s balance:`,
            description: `${client.mechwarriors.get(key,"cbills")} C-Bills`,
            timestamp: new Date()
        }
    });
}