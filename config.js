const { Sequelize } = require("sequelize");
require("dotenv").config();

const toBool = x => x?.toLowerCase() === "true";
const DATABASE_URL = process.env.DATABASE_URL?.trim() || "./db.sqlite3";
const isPostgres = DATABASE_URL.startsWith("postgresql://");

const sequelizeOptions = {
 dialect: isPostgres ? "postgres" : "sqlite",
 logging: false,
 ...(isPostgres
  ? {
     ssl: true,
     protocol: "postgres",
     dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
     }
    }
  : { storage: DATABASE_URL })
};

module.exports = {
 DATABASE_URL,
 DATABASE: new Sequelize(DATABASE_URL, null, null, sequelizeOptions), // Corrected
 SESSION_ID: (process.env.SESSION_ID || "Session~NmfEW6G5").trim(),
 BOT_INFO: process.env.BOT_NAME || "𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈;𝐍𝐎𝐕𝐀 ᵛ1;",
 SUDO: process.env.SUDO || "263784562833",
 HANDLERS: ["false", "null"].includes(process.env.HANDLER) ? "^" : ".",
 WELCOME_MSG: process.env.WELCOME_MSG || "",
 GOODBYE_MSG: process.env.GOODBYE_MSG || "",
 ANTILINK: process.env.ANTILINK || true,
 AUTO_BIO: process.env.AUTO_BIO || true,
 AUTO_REACT: process.env.AUTO_REACT || false,
 AUTO_READ: toBool(process.env.AUTO_READ) || false,
 AUTO_STATUS_READ: toBool(process.env.AUTO_STATUS_READ) || true,
 STICKER_PACK: process.env.AUTHOR || "𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈;𝐍𝐎𝐕𝐀 ᵛ1",
 LOGS: toBool(process.env.LOGS) || true,
 WARN_COUNT: 3,
 RMBG_API_KEY: process.env.RMBG_API_KEY || "",
 DELETED_LOG: toBool(process.env.DELETED_LOG) || true,
 DELETED_LOG_CHAT: toBool(process.env.DELETED_LOG_CHAT) || true,
 TIME_ZONE: process.env.TZ,
 BRANCH: "master",
 WORK_TYPE: process.env.WORK_TYPE || "public",
 VERSION: require("./package.json").version
};
