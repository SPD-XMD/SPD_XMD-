module.exports = {
  name: "cmd56",
  execute: async (sock, msg, args) => {
    const emoji = ["❤️", "😂", "🔥", "👍", "😎", "🤖"][Math.floor(Math.random() * 6)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `Command *cmd56* executed successfully!`,
      react: { text: emoji, key: msg.key }
    });
  }
};
