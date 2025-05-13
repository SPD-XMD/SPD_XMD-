
module.exports = {
  name: 'cmd28',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd28 = `
*🤖 BOT MENU*
1. !cmd28
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd28 }, { quoted: m });
  }
};
