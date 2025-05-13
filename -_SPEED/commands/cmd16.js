
module.exports = {
  name: 'cmd16',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd16 = `
*🤖 BOT MENU*
1. !cmd16
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd16 }, { quoted: m });
  }
};
