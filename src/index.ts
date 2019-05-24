// https://abal.moe/Eris/docs/
import * as Eris from 'eris';

const bot = new Eris.Client(process.env.DISCORD || 'TOKEN NOT SET');

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('messageCreate', (msg: Eris.Message) => {
  if (msg.content === '!ping') {
    bot.createMessage(msg.channel.id, 'Pong.');
  }
});

bot.connect();
