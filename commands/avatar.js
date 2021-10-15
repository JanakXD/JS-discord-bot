module.exports = {
    name: "avatar",
    description: "Get a user's avatar",
    execute(message, args, Discord) {
        let embed = new Discord.MessageEmbed()
        .setTitle('Your discord avatar')
        .setImage(message.author.displayAvatarURL())
        .setFooter('Looks Good')

    message.channel.send(embed)
    },
};