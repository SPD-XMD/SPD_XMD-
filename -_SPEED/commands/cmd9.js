
module.exports = {
  name: 'cmd9',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd9s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd9 = cmd9s[Math.floor(Math.random() * cmd9s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd9 }, { quoted: m });
  }
};
