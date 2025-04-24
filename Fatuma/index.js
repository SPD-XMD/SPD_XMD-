const { WAConnection, MessageType, Mimetype } = require('@whiskeysockets/baileys');
const fs = require('fs');
const readline = require('readline');

const conn = new WAConnection();

async function startBot() {
    conn.on('open', () => {
        console.log('Bot is now connected!');
    });

    await conn.connect();
    console.log('QR Code scan successful!');
}

startBot();
