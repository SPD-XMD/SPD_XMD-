module.exports = {
  name: "cmd77",
  execute: async (sock, msg, args) => {
    const emoji = ["❤️", "😂", "🔥", "👍", "😎", "🤖"][Math.floor(Math.random() * 6)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `Command *cmd77* executed successfully!`,
      react: { text: emoji, key: msg.key }
    });
  }
};
