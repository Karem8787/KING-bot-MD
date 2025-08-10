import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['201065826587', 'KING', true],
]

global.mods = []
global.prems = []

global.namebot = '🎋 KING - SOLO 🫑'
global.packname = '🧩 SOKO BOT 🌿'
global.author = '🍁 SOLO 🐦‍🔥 KING'
global.moneda = '˒˒⭐˓˓ SOLO 🪼'

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.yukiJadibts = true

global.namecanal = '❇️'
global.idcanal = '120363403739366547@newsletter'
global.idcanal2 = '120363402159669836@newsletter'
global.canal = 'https://whatsapp.com/channel/0029Vb6UFoi05MUe24Jo7r1r'
global.canalreg = '120363402895449162@newsletter'

global.ch = {
  ch1: '120363420941524030@newsletter'
}

global.multiplier = 69
global.maxwarn = '2'



let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("🔄 Se actualizó 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})