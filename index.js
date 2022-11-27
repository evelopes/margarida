const { Telegraf } = require('telegraf');
import { dados } from 'dadosYoutube.';

const bot = new Telegraf("5694149422:AAFAdlAKzYQ5vJISwZtHz-XF1W-TQDNV1wI");
bot.telegram.sendMessage(-641607598, 'Olá 🌼, diga o nome da fruta, que quer informações!');
bot.start((ctx) => ctx.reply('Responda com o nome de uma FRUTA, LEGUME ou VERDURA, que gostaria de receber informações!🌼'));


bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();



i



// https://api.telegram.org/bot5694149422:AAFAdlAKzYQ5vJISwZtHz-XF1W-TQDNV1wI/getUpdates