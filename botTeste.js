const Telegraf = require('telegraf');
const bot = new Telegraf("5694149422:AAFAdlAKzYQ5vJISwZtHz-XF1W-TQDNV1wI");


bot.start(content => {
    const from = content.update.message.from;
    console.log(from)
    content.reply(`Muito bem-vindo, ${from.first_name}!`)
})


bot.on('text', (content, next) => {
    content.reply('Margarida digitando...')
    next()
})


bot.startPolling()
