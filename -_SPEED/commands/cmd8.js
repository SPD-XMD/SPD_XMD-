
module.exports = {
  name: 'cmd8',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd8 = `
*🤖 BOT MENU*
1. !cmd8
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd8 }, { quoted: m });
  }
};
