
module.exports = {
  name: 'cmd23',
  description: 'Washa au zima ulinzi wa link',
  execute: async (sock, m, args, db) => {
    const chatId = m.key.remoteJid;
    const setting = args[0];

    if (setting === 'on') {
      db.cmd23[chatId] = true;
      await sock.sendMessage(chatId, { text: '✅ Antilink imewashwa' }, { quoted: m });
    } else if (setting === 'off') {
      db.cmd23[chatId] = false;
      await sock.sendMessage(chatId, { text: '❌ Antilink imezimwa' }, { quoted: m });
    } else {
      await sock.sendMessage(chatId, { text: '⚠️ Tumia: !cmd23 on/off' }, { quoted: m });
    }
  }
};
