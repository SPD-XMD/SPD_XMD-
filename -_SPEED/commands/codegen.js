module.exports = {
  name: "cmd64",
  execute: async (sock, msg, args) => {
    const emoji = ["❤️", "😂", "🔥", "👍", "😎", "🤖"][Math.floor(Math.random() * 6)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `Command *cmd64* executed successfully!`,
      react: { text: emoji, key: msg.key }
    });
  }
};
