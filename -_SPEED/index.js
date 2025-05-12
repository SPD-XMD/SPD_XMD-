const http = require("http");
http.createServer((req, res) => res.end("Bot is alive")).listen(8080);

const fs = require("fs");
const P = require("pino");
const axios = require("axios");
const cheerio = require("cheerio");
const { Boom } = require("@hapi/boom");
const {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore
} = require("@whiskeysockets/baileys");

const PREFIX = "🙃";
const OWNER_JID = "255654478605@s.whatsapp.net"; // badilisha na namba yako ya WhatsApp

const store = makeInMemoryStore({});
store.readFromFile("./store.json");
setInterval(() => store.writeToFile("./store.json"), 10_000);

// Emoji reaction
const emojiReactions = ["❤️", "😂", "🔥", "👍", "😎", "🤖"];
const randomEmoji = () => emojiReactions[Math.floor(Math.random() * emojiReactions.length)];

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, P({ level: "silent" })),
    },
    logger: P({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["FatumaBot", "Safari", "1.0.0"],
    getMessage: async () => ({ conversation: "Hello!" })
  });

  store.bind(sock.ev);
  sock.ev.on("creds.update", saveCreds);

  // PAIR CODE
  if (!sock.authState.creds.registered) {
    const code = await sock.requestPairingCode(OWNER_JID);
    console.log(`PAIR CODE: ${code}`);
  }

  // Auto View Status
  sock.ev.on("messages.update", async (msg) => {
    for (let update of msg) {
      if (update.messageStubType === 37) {
        await sock.readMessages([update.key]);
      }
    }
  });

  // Welcome Message
  sock.ev.on("group-participants.update", async (update) => {
    if (update.action === "add") {
      for (let user of update.participants) {
        await sock.sendMessage(update.id, {
          text: `Karibu sana @${user.split("@")[0]}!`,
          mentions: [user]
        });
      }
    }
  });

  // Message handler
  sock.ev.on("messages.upsert", async ({ messages }) => {
    let msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const type = Object.keys(msg.message)[0];
    const body = msg.message.conversation || msg.message[type]?.caption || "";
    const sender = msg.key.participant || msg.key.remoteJid;

    // Fake presence
    await sock.sendPresenceUpdate("recording", from);
    await new Promise(r => setTimeout(r, 5000));

    // React with emoji
    await sock.sendMessage(from, {
      react: { text: randomEmoji(), key: msg.key }
    });

    // View Once opener
    if (msg.message?.viewOnceMessageV2) {
      const viewOnce = msg.message.viewOnceMessageV2.message;
      await sock.sendMessage(from, viewOnce, { quoted: msg });
    }

    // Anti-link
    if (body.match(/https:\/\/chat\.whatsapp\.com\//)) {
      if (!msg.key.fromMe && !sender.includes(OWNER_JID)) {
        await sock.sendMessage(from, { text: "Link za group haziruhusiwi!" });
        await sock.groupParticipantsUpdate(from, [sender], "remove");
      }
    }

    // Commands
    if (body.startsWith(PREFIX)) {
      const cmd = body.slice(1).trim().split(" ")[0].toLowerCase();
      switch (cmd) {
        case "ping":
          await sock.sendMessage(from, { text: "🏓 Pong!" });
          break;
        case "menu":
          await sock.sendMessage(from, {
            text: `*🙃 Fatuma Bot Menu*\n\n` +
                  `🙃ping - Check bot status\n` +
                  `🙃menu - Show this menu\n\n` +
                  `Zaidi zinakuja...`
          });
          break;
        default:
          await sock.sendMessage(from, { text: "Command haipo!" });
      }
    }
  });

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log("Connection closed, reconnecting:", shouldReconnect);
      if (shouldReconnect) startBot();
    } else if (connection === "open") {
      console.log("✅ Bot connected!");
    }
  });
}

startBot().catch((err) => console.error("Bot start error:", err));
