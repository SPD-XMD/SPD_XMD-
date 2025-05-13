
module.exports = {
  name: 'fake',
  description: 'Tuma voice fake ya sekunde 5',
  execute: async (sock, m) => {
    await sock.sendMessage(m.key.remoteJid, {
      audio: { url: './media/fake.mp3' },
      mimetype: 'audio/mp4',
      ptt: true,
    }, { quoted: m });
  }
};
