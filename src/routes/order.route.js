const dotenv = require('dotenv');
const Order = require('../models/order.model');
const express = require('express');
var TelegramBot = require('node-telegram-bot-api');

dotenv.config();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const orderRouter = express.Router();

orderRouter.post('/', async (req, res) => {
  try {
    const newOrder = new Order({ ...req.body });
    await newOrder.save();
    await bot.sendMessage(
      process.env.CHANNEL_ID,
      `Имя: ${newOrder.name}\n\nНомер телефона: ${newOrder.phone}\n\nТовар: ${newOrder.orderType}\n\nКоментарии: ${newOrder.comment}`
    );
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(204);
    console.log(error);
  }
});

module.exports = orderRouter;
