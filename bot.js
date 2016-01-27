'use strict';

// const config = require('./config');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.configToken;

const bot = new TelegramBot(config.token, {polling: true});

bot.on('inline_query', msg => {
    const input = msg.query;
    const queryId = msg.id;

    console.log('Incoming request');

    const response = {
        id: 'res',
        type: 'article',
        parse_mode: 'markdown',
        title: input,
        message_text: input
    };

    if(input.length > 0){
        bot.answerInlineQuery(queryId, [response], {})
            .then(res => console.log(res));
    }

});
