
module.exports = {
  name: 'cmd5',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd5s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd5 = cmd5s[Math.floor(Math.random() * cmd5s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd5 }, { quoted: m });
  }
};
