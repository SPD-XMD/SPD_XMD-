module.exports = {
  name: "cmd47",
  execute: async (sock, msg, args) => {
    const emoji = ["❤️", "😂", "🔥", "👍", "😎", "🤖"][Math.floor(Math.random() * 6)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `Command *cmd47* executed successfully!`,
      react: { text: emoji, key: msg.key }
    });
  }
};
