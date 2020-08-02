exports.run = async (client, message, args) => {
    const key = `${message.guild.id}-${message.author.id}`;
    message.channel.send({
        embed: {
            color: 3447003,
            title: `${message.member.user.username}'s balance:`,
            description: `${client.mechwarriors.get(key,"cbills")} C-Bills`,
            timestamp: new Date()
        }
    });
}