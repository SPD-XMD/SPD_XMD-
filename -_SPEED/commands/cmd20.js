
module.exports = {
  name: 'cmd20',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd20 = `
*🤖 BOT MENU*
1. !cmd20
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd20 }, { quoted: m });
  }
};
