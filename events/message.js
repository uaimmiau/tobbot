module.exports = async (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    // Ignore DMs
    if (!message.guild) return;

    const responseObject = require("../pressX/responseObject.json");

    //check if message starts with something which we can respond to in a hilarious way
    for (var property in responseObject) {
        if (message.content.toLowerCase().startsWith(property)) {
            message.channel.send(responseObject[property]);
        }
    }

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return message.reply("There's no such command!");

    // Run the command
    cmd.run(client, message, args);
};