require("./Encore")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "50937186680"
global.nobot = "50937186680"
global.namaowner = "Ａ𝓷ᗪ𝐘"
global.namaBot = "Elaina And Ａ𝓷ᗪ𝐘-Md"
global.title = "Ａ𝓷ᗪ𝐘"

// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = version
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.autoread = false
global.autotyping = false
global.Antilinkgc = false
global.Antilinkch = false
global.antispam = false
global.onlygc = false
global.autobio = false

// Set Payment
global.qris = "https://files.catbox.moe/iwpd4i.jpg"
global.dana = ""
global.gopay = ""

// ===={ Set Link }
global.ch = 'https://whatsapp.com/channel/0029VbBkrap9hXF4EJWfnj3D'
global.idch = '120363404502742107@newsletter'
global.linkgc = 'https://whatsapp.com/channel/0029VbBkrap9hXF4EJWfnj3D'
global.yt = ''
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = ""
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "@andy.0y"
global.yt = "@-"
global.ig = "@andyswiftt"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/i27pnn.jpg'
global.thumnail2 = 'https://files.catbox.moe/i27pnn.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
