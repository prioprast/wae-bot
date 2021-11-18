let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ Dana: +62 857-7059-8246
├ Pulsa: +62 857-7059-8246
└────
`.trim(), 'Donasi seikhlasnya insha Allah berkah', 'Contact owner 📞', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
