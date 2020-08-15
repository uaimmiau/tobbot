exports.run = async (client, message, args) => {
    let user;
    let username;
    if (args[0] == null) {
        user = message.author.id;
        username = message.author.username;
    } else if (args[0].startsWith("<")) {
        user = args[0].slice(3, args[0].length - 1);
        let temp = client.users.find(u => u.id == user)
        username = temp.username;
    } else {
        let temp = client.users.find(user => user.username == args[0])
        user = temp.id;
        username = temp.username;
    }


    const key = `${message.guild.id}-${user}`;
    console.log(client.mechwarriors.get(key, "inventory"));
    message.channel.send({
        embed: {
            color: Math.floor(Math.random() * 9999999),
            title: `${username}'s inventory:`,
            description: `${client.mechwarriors.get(key,"inventory")}`,
            timestamp: new Date()
        }
    });

}