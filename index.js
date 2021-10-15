const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const prefix = '>';
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

// on ready
client.once('ready', () => {
    console.log('JS bot is online');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping') { // ping command
        client.commands.get('ping').execute(message, args);
    } else if(command == 'avatar') { // avatar command
        client.commands.get('avatar').execute(message, args, Discord);
    } else if(command == 'clear') { // clear command
        client.commands.get('clear').execute(message, args, Discord, ms);
    }
});

client.login(config.token);
