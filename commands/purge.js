exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    // Parse Amount
    var amount = 0;
    if (args[1] == null) {
        amount = parseInt(args[0]);
    } else {
        amount = parseInt(args[1]);
    }

    if (!amount) return message.reply('Must specify an amount to delete!');
    if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
    // Fetch 100 messages (will be filtered and lowered up to max amount requested)
    message.channel.fetchMessages({
        limit: 100,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
        } else {
            messages = messages.array().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    message.reply(`Successfully deleted ${amount} messages from the channel`);
};