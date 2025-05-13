
module.exports = {
  name: 'cmd4',
  description: 'Onesha menyu ya amri',
  execute: async (sock, m, args) => {
    let cmd4 = `
*🤖 BOT MENU*
1. !cmd4
2. !joke
3. !meme
4. !quote
5. !fake
...
    `;
    await sock.sendMessage(m.key.remoteJid, { text: cmd4 }, { quoted: m });
  }
};
