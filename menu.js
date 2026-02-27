require('./config');
require('./Encore');
const fs = require('fs')
const chalk = require('chalk')

global.menu = `
╭──❀︎ *𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔*
│☯︎🇭🇹 Menuall
│☯︎🇭🇹 Menuowner
│☯︎🇭🇹 Menugroup
│☯︎🇭🇹 Menupanel
│☯︎🇭🇹 Menuai
│☯︎🇭🇹 Menudownload
│☯︎🇭🇹 Menuconvert
│☯︎🇭🇹 Menusound
│☯︎🇭🇹 Menurandom
│☯︎🇭🇹 Menufun
│☯︎🇭🇹 Menuother
│☯︎🇭🇹 Menunsfw
│☯︎🇭🇹 Menuprimbon
│☯︎🇭🇹 Menuquotes
│☯︎🇭🇹 Menucecan
│☯︎🇭🇹 Menupush
│☯︎🇭🇹 Menuislam
│☯︎🇭🇹 Menuanime
│☯︎🇭🇹 Menumaker
│☯︎🇭🇹 Menusad
│☯︎🇭🇹 Menugenshin
│☯︎🇭🇹 Menuberita
│☯︎🇭🇹 Menurandomvid
│☯︎🇭🇹 Menulinode
│☯︎🇭🇹 Menumenfess
│☯︎🇭🇹 Menugame
│☯︎🇭🇹 Menustore
│☯︎🇭🇹 Menusearch
│☯︎🇭🇹 Menubug
│☯︎🇭🇹 Menustalk
╰───────────✦`

global.allmenu = `
╭──❀ *𝐎 𝐖 𝐍 𝐄 𝐑* 
│☯︎🇭🇹 Listowner
│☯︎🇭🇹 Addowner
│☯︎🇭🇹 Delowner
│☯︎🇭🇹 Listgc
│☯︎🇭🇹 Onlygc
│☯︎🇭🇹 Listprem
│☯︎🇭🇹 Delprem
│☯︎🇭🇹 Public
│☯︎🇭🇹 Self
│☯︎🇭🇹 Setppbot
│☯︎🇭🇹 Delppbot
│☯︎🇭🇹 Tojs
│☯︎🇭🇹 Join
│☯︎🇭🇹 Rvo
│☯︎🇭🇹 Autoread
│☯︎🇭🇹 Autotyping
│☯︎🇭🇹 Autosholat
│☯︎🇭🇹 Clearchat
│☯︎🇭🇹 Reactch
│☯︎🇭🇹 Addplugin
│☯︎🇭🇹 Delplugin
│☯︎🇭🇹 Listplugin
│☯︎🇭🇹 Getplugin
│☯︎🇭🇹 On
│☯︎🇭🇹 Off
│☯︎🇭🇹 Upswtag
│☯︎🇭🇹 Nglspam
│☯︎🇭🇹 Setbotname
│☯︎🇭🇹 Setbotbio
│☯︎🇭🇹 Autobio
│☯︎🇭🇹 Addcase
│☯︎🇭🇹 Delcase
│☯︎🇭🇹 Listcase
│☯︎🇭🇹 Getcase
│☯︎🇭🇹 Creategc
│☯︎🇭🇹 Restart
╰─────────────☉
╭──☉ *G R O U P* 
│☯︎🇭🇹 Kick
│☯︎🇭🇹 Tagall
│☯︎🇭🇹 Hidetag
│☯︎🇭🇹 Totag
│☯︎🇭🇹 Setppgc
│☯︎🇭🇹 Delppgc
│☯︎🇭🇹 Promote
│☯︎🇭🇹 Demote
│☯︎🇭🇹 Open
│☯︎🇭🇹 Close
│☯︎🇭🇹 Opentime
│☯︎🇭🇹 Closetime
│☯︎🇭🇹 Linkgc
│☯︎🇭🇹 Resetlinkgc
│☯︎🇭🇹 Antilinkgc
│☯︎🇭🇹 Antilinkch
│☯︎🇭🇹 Antiwame
│☯︎🇭🇹 Antilinkig
│☯︎🇭🇹 Antilinkall
│☯︎🇭🇹 Delete
╰─────────────☉

╭──☉ *A I - G E M I N I* 
│☯︎🇭🇹 Autoai
│☯︎🇭🇹 Ai
│☯︎🇭🇹 Openai
│☯︎🇭🇹 Gpt
│☯︎🇭🇹 Luminai
│☯︎🇭🇹 Gemini
│☯︎🇭🇹 Google
│☯︎🇭🇹 Putihkan
│☯︎🇭🇹 Hitamkan
│☯︎🇭🇹 Pretty
│☯︎🇭🇹 Ugly
│☯︎🇭🇹 Sedih
│☯︎🇭🇹 Senyum
│☯︎🇭🇹 Night
│☯︎🇭🇹 Ocr
│☯︎🇭🇹 Bingimg
│☯︎🇭🇹 Toanime
│☯︎🇭🇹 Toreal
│☯︎🇭🇹 Faceblur
│☯︎🇭🇹 Botakin
│☯︎🇭🇹 Removal
╰─────────────☉
╭──☉ *D O W N L O A D* 
│☯︎🇭🇹 Tiktok
│☯︎🇭🇹 Instagram
│☯︎🇭🇹 Facebook
│☯︎🇭🇹 Capcut
│☯︎🇭🇹 Snackvideo
│☯︎🇭🇹 Mediafire
│☯︎🇭🇹 Gdrive
│☯︎🇭🇹 Gitclone
│☯︎🇭🇹 Ytmp4
│☯︎🇭🇹 Ytmp3
│☯︎🇭🇹 Play
│☯︎🇭🇹 Yts
╰─────────────☉
╭──☉ *O T H E R* 
│☯︎🇭🇹 Brat
│☯︎🇭🇹 Bratvid
│☯︎🇭🇹 Sticker
│☯︎🇭🇹 Smeme
│☯︎🇭🇹 Swm
│☯︎🇭🇹 Tourl
│☯︎🇭🇹 Tourl2
│☯︎🇭🇹 Hd
│☯︎🇭🇹 Tohd
│☯︎🇭🇹 Hdvid
│☯︎🇭🇹 Superhd
│☯︎🇭🇹 Qc
│☯︎🇭🇹 Tovn
│☯︎🇭🇹 Toaudio
│☯︎🇭🇹 Toimg
│☯︎🇭🇹 Getpp
│☯︎🇭🇹 Readmore
│☯︎🇭🇹 Iqc
│☯︎🇭🇹 Tts
│☯︎🇭🇹 Owner
│☯︎🇭🇹 Enc
│☯︎🇭🇹 Ssweb
│☯︎🇭🇹 Pastebin
│☯︎🇭🇹 Getpp
╰─────────────☉
╭──☉ *S T O R E* 
│☯︎🇭🇹 Cekidch
│☯︎🇭🇹 Upch
│☯︎🇭🇹 Sendgc
│☯︎🇭🇹 Proses
│☯︎🇭🇹 Done
│☯︎🇭🇹 List
│☯︎🇭🇹 Addlist
│☯︎🇭🇹 Dellist
│☯︎🇭🇹 Updatelist
│☯︎🇭🇹 Payment
╰─────────────☉
╭──☉ S E A R C H
│☯︎🇭🇹 Playstore
│☯︎🇭🇹 Playstation
│☯︎🇭🇹 Google
│☯︎🇭🇹 Yts
│☯︎🇭🇹 Soundcloud
│☯︎🇭🇹 Play
│☯︎🇭🇹 Pin
╰─────────────☉
╭──☉ B U G
│☯︎🇭🇹 Fclose
│☯︎🇭🇹 Forceclose
│☯︎🇭🇹 Fc-invis
│☯︎🇭🇹 Delaymaker
│☯︎🇭🇹 Delayinvis
│☯︎🇭🇹 Crash
│☯︎🇭🇹 Delayip
╰─────────────☉
╭──☉ S T A L K E R
│☯︎🇭🇹 Stalkff
│☯︎🇭🇹 Stalkml
│☯︎🇭🇹 Stalkgmail
│☯︎🇭🇹 stalkgc
╰───────────✦
`

global.menuowner = `
╭──❀ *O W N E R* 
│☯︎ listowner
│☯︎ addowner
│☯︎ delowner
│☯︎ listgc
│☯︎ onlygc
│☯︎ listprem
│☯︎ delprem
│☯︎ public
│☯︎ self
│☯︎ setppbot
│☯︎ delppbot
│☯︎ tojs
│☯︎ join
│☯︎ rvo
│☯︎ autoread
│☯︎ autotyping
│☯︎ autosholat
│☯︎ clearchat
│☯︎ reactch
│☯︎ addplugin
│☯︎ delplugin
│☯︎ listplugin
│☯︎ getplugin
│☯︎ on
│☯︎ off
│☯︎ upswtag
│☯︎ nglspam
│☯︎ setbotname
│☯︎ setbotbio
│☯︎ autobio
│☯︎ addcase
│☯︎ delcase
│☯︎ listcase
│☯︎ getcase
│☯︎ creategc
│☯︎ restart
╰───────────✦`

global.menugroup = `
╭──❀ *G R O U P* 
│☯︎ addlist
│☯︎ dellist
│☯︎ updatelist
│☯︎ list
│☯︎ kick
│☯︎ tagall
│☯︎ hidetag
│☯︎ totag
│☯︎ setppgc
│☯︎ delppgc
│☯︎ promote
│☯︎ demote
│☯︎ open
│☯︎ close
│☯︎ opentime
│☯︎ closetime
│☯︎ linkgc
│☯︎ resetlinkgc
│☯︎ antilinkgc
│☯︎ antilinkch
│☯︎ antiwame
│☯︎ antilinkig
│☯︎ antilinkall
│☯︎ delete
╰───────────✦`

global.menuai = `
╭──❀ *A I - G E M I N I* 
│☯︎ autoai
│☯︎ ai
│☯︎ openai
│☯︎ gpt
│☯︎ luminai
│☯︎ gemini
│☯︎ google
│☯︎ putihkan
│☯︎ hitamkan
│☯︎ pretty
│☯︎ ugly
│☯︎ sedih
│☯︎ senyum
│☯︎ night
│☯︎ ocr
│☯︎ bingimg
│☯︎ toanime
│☯︎ toreal
│☯︎ faceblur
│☯︎ botakin
│☯︎ removal
╰───────────✦
`
global.menudownload = `
╭──❀ *D O W N L O A D* 
│☯︎ TikTok
│☯︎ Instagram
│☯︎ facebook
│☯︎ Capcut
│☯︎ Snackvideo
│☯︎ Mediafire
│☯︎ Gdrive
│☯︎ Gitclone
│☯︎ ytmp4
│☯︎ ytmp3
│☯︎ play
│☯︎ yts
╰───────────✦
`
global.menuconvert = `
╭──❀ *C O N V E R T* 
│☯︎ bass
│☯︎ blown
│☯︎ deep
│☯︎ earrape
│☯︎ fast
│☯︎ fat
│☯︎ nightcore
│☯︎ reverse
│☯︎ robot
│☯︎ slow
│☯︎ smooth
│☯︎ tupai
╰───────────✦
`
global.menuother = `
╭──❀ *O T H E R* 
│☯︎ brat
│☯︎ bratvid
│☯︎ sticker
│☯︎ smeme
│☯︎ swm
│☯︎ tourl
│☯︎ tourl2
│☯︎ hd
│☯︎ tohd
│☯︎ hdvid
│☯︎ superhd
│☯︎ qc
│☯︎ tovn
│☯︎ toaudio
│☯︎ toimg
│☯︎ getpp
│☯︎ readmore
│☯︎ iqc
│☯︎ tts
│☯︎ owner
│☯︎ enc
│☯︎ ssweb
│☯︎ pastebin
│☯︎ getpp
╰───────────✦
`
global.menustore = `
╭──❀ *S T O R E* 
│☯︎ cekidch
│☯︎ upch
│☯︎ sendgc
│☯︎ proses
│☯︎ done
│☯︎ list
│☯︎ addlist
│☯︎ dellist
│☯︎ updatelist
│☯︎ payment
╰───────────✦
`
global.menuse = `
╭──❀ *S E A R C H* 
│☯︎ playstore
│☯︎ playstation
│☯︎ google
│☯︎ yts
│☯︎ soundcloud
│☯︎ play
│☯︎ pin
╰───────────✦
`
global.menubug = `
╭──❀ *B U G* 
│☯︎ fclose
│☯︎ forceclose
│☯︎ fc-invis
│☯︎ delaymaker
│☯︎ delayinvis
│☯︎ crash
│☯︎ delayip
╰───────────✦`
global.stalkmenu = `
╭──❀ *S T A L K E R* 
│☯︎ stalkff
│☯︎ stalkml
│☯︎ stalkgmail
│☯︎ stalkgc
╰───────────✦`
global.createimage = `
╭──❀ *C R E A T E* 
│☯︎ tofigure
│☯︎ photo-nailong
│☯︎ style-ootd
│☯︎ lift-photo
│☯︎ cinematic-merbabu 
│☯︎ cinematic-train 
│☯︎ cinematic-touring
│☯︎ cinematic-grafity
╰───────────✦`
//============{ Import } =============