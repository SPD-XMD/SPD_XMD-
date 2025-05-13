
module.exports = {
  name: 'cmd13',
  description: 'Toa utani mmoja random',
  execute: async (sock, m, args) => {
    const cmd13s = [
      "Kwa nini kuku alivuka barabara? Kutafuta Wi-Fi!",
      "Mwanafunzi alikosa mtihani sababu alienda Google!",
      "Kama maisha ni safari, basi mimi ni puncture!"
    ];
    let cmd13 = cmd13s[Math.floor(Math.random() * cmd13s.length)];
    await sock.sendMessage(m.key.remoteJid, { text: cmd13 }, { quoted: m });
  }
};
