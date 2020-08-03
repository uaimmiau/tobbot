exports.run = async (client, message, args) => {
    if (message.author.id != client.config.ownerID) return message.reply("You aren't allowed to do this");
    let user;
    if (args[0] == null || args[1] == null) return message.reply("Must specify user and payout");
    if (args[0].startsWith("<")) {
        user = args[0].slice(3, args[0].length - 1);
    } else {
        let temp = client.users.find(user => user.username == args[0])
        user = temp.id;
    }
    const key = `${message.guild.id}-${user}`;
    const pay = parseInt(args[1], 10);
    let currentBal = parseInt(client.mechwarriors.get(key, "cbills"), 10);
    let newBal = currentBal + pay;
    client.mechwarriors.set(key, newBal, "cbills");
};