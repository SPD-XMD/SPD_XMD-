module.exports = {
  name: "cmd18",
  execute: async (sock, msg, args) => {
    const emoji = ["❤️", "😂", "🔥", "👍", "😎", "🤖"][Math.floor(Math.random() * 6)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `Command *cmd18* executed successfully!`,
      react: { text: emoji, key: msg.key }
    });
  }
};
