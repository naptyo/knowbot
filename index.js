import Discord from 'discord.js';

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});