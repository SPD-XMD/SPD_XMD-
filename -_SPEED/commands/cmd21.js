
module.exports = {
  name: 'cmd21',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd21s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd21 = cmd21s[Math.floor(Math.random() * cmd21s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd21 }, { quoted: m });
  }
};
