
module.exports = {
  name: 'cmd12',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd12 = `
*🤖 BOT MENU*
1. !cmd12
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd12 }, { quoted: m });
  }
};
