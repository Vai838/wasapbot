exports.wait = () => {
	return`*「 WAIT 」PROCESSING...*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*GRUB LEVEL IS NOT ACTIVATED YET*`
}

exports.noregis = () => {
	return`*「 NOT REGISTERED 」*\n\n*how to register? ${prefix}register Name | Age* \n*example ${prefix}register Vai|20*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED 」*\n\n*you are already registered in the bot database*`
}

exports.stikga = () => {
	return`*failed, try to repeat in a while again*`
}

exports.linkga = () => {
	return`*sorry invalid link*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「BOT OWNER ONLY」*`
}

exports.ownerg = () => {
	return`*「GROUP OWNER ONLY」*`
}

exports.admin = () => {
	return`*「GROUP ADMIN  ONLY」*`
}

exports.badmin = () => {
	return`*「BOT MUST BE ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW IN ACTIVE*`
}

exports.bug = () => {
	return`*Problems have been reported to the BOT owner, false reports will not be responded to*`
}

exports.wrongf = () => {
	return`*Incorrect format / blank text*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRATION 」*\n\To find out if you have registered, please check the message I sent \n\nNOTE:\n*if you haven't got the message. means you haven't saved the bot number*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return` ```「 COUNTRY DATA 」\n\nyou have registered with the data \n\n┏━⊱Name : ${namaUser}\n┣⊱Number : wa.me/${sender.split("@")[0]}\n┣⊱Age : ${umurUser}\n┣⊱registration time : ${time}\n┣⊱*NS : ${serialUser}\n┗⊱NOTE : don't forget this number because it's important:v``` `
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* not found \ try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*sorry but $ {pushname} is not the owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Sorry ${pushname} level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱Type of command : ${command}*\n*┗⊱level requirements : ${aha}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Sorry ${pushname} level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱Type of command : ${command}*\n*┗⊱level requirements : ${ahb}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Sorry ${pushname} level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱Type of command: ${command}*\n*┗⊱level requirements : ${ahc}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Sorry ${pushname} level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱Type of command : ${command}*\n*┗⊱level requirements : ${ahd}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Sorry ${pushname} level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱Type of command : ${command}*\n*┗⊱level requirements : ${ahe}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Sorry ${pushname} level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱Type of command : ${command}*\n*┗⊱level requirements : ${ahf}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Name* : ${pushname}
┣⊱ *Number* : wa.me/${sender.split("@")[0]}
┣⊱ *Your Credits* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *Vai838* ⸩  ⊰━━━━┛


• ${prefix}groupmenu


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}avengers*
┣⊱ *${prefix}summer*
┣⊱ *${prefix}sandwrite*
┣⊱ *${prefix}metaldark*
┣⊱ *${prefix}dropwater*
┣⊱ *${prefix}greenneon*
┣⊱ *${prefix}neontext*
┣⊱ *${prefix}sumery*
┣⊱ *${prefix}blood*
┣⊱ *${prefix}firework*
┣⊱ *${prefix}lava*
┣⊱ *${prefix}qrcode*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}can you*
┣⊱ *${prefix}when*
┣⊱ *${prefix}is*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid*
┣⊱ *${prefix}happymod*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}hoax news*
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}bitly*
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}joox*
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit*
┣⊱ *${prefix}buylimit*
┣⊱ *${prefix}transfer*
┣⊱ *${prefix}dompet*
┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [open/close]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc*
┣⊱ *${prefix}bcgc*
┣⊱ *${prefix}kickall*
┣⊱ *${prefix}setreply*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone*
┣⊱ *${prefix}setppbot*
┣━━⊱ *GROUP BOT* ⊰━┫
┃
┣⊱ NOTE : Misuse and get blocked
┃
┗━━⊱  ⸨ *Vai838* ⸩  ⊰━━━┛
`
}

exports.group = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	`
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Name* : ${pushname}
┣⊱ *Number* : wa.me/${sender.split("@")[0]}
┣⊱ *Your Credits* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *Vai838* ⸩  ⊰━━━━┛


┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [open/close]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
	
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 GREETINGS 」*
┏⊱ *Name* : ${pushname}
┣⊱ *Number* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* = +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`
}
 
exports.limitend = (pushname) => {
	return`*Sorry ${pushname} today's limit is up*\n*The limit is reset every 24:00 hours*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Remaining Limit : ${limitCounts}

NOTE : to get to the limit, you can level up or buylimit`
}

exports.satukos = () => {
	return`*Add parameter 1 / enable or 0 / disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Name* : ${pushname}\n┣⊱ *Number* : ${sender.split("@")[0]}\n┣⊱ *Credit* : ${uangkau}\n┗━━━━━━━━━━`
}
