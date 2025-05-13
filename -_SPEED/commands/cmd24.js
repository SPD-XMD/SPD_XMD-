
module.exports = {
  name: 'cmd24',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd24 = `
*🤖 BOT MENU*
1. !cmd24
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd24 }, { quoted: m });
  }
};
