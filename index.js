var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("457745663:AAHXCkrzS13fWMJmdtkLl9hloOaxCsEcFuI", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hai Kawan Baru");
});
