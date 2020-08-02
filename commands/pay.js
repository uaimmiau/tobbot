exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    const key = `${message.guild.id}-${user.id}`;
    console.log(user.id, key, message.author.id, args[1]);
    const pay = parseInt(args[1], 10);
    let currentBal = parseInt(client.mechwarriors.get(key, "cbills"), 10);
    let newBal = currentBal + pay;
    console.log(newBal);
    client.mechwarriors.set(key, newBal, "cbills")
}