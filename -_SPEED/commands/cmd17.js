
module.exports = {
  name: 'cmd17',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd17s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd17 = cmd17s[Math.floor(Math.random() * cmd17s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd17 }, { quoted: m });
  }
};
