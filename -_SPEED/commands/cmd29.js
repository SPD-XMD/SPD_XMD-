
module.exports = {
  name: 'cmd29',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd29s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd29 = cmd29s[Math.floor(Math.random() * cmd29s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd29 }, { quoted: m });
  }
};
