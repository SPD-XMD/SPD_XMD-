
module.exports = {
  name: 'cmd25',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd25s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd25 = cmd25s[Math.floor(Math.random() * cmd25s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd25 }, { quoted: m });
  }
};
