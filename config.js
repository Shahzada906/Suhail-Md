const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_12_31_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUJCRHhLdk1ZSVFxSER5NmVFUTF2aWxIamxWMTBzWmJNMlRwUmcxNWxuMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjRyVzRwckFTMFd3VEd4QXd0Y2RqQVwiLFxuICBcInBob25lSWRcIjogXCI5MjYxM2M4YS02NGJiLTQzZTgtODBkYi0zN2NhYTUwNWIzNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTI0LFxuICAgICAgMTQ4LFxuICAgICAgMTU5LFxuICAgICAgMjIzLFxuICAgICAgMjAsXG4gICAgICAxODMsXG4gICAgICAxMzIsXG4gICAgICA0OCxcbiAgICAgIDE3OSxcbiAgICAgIDE4NCxcbiAgICAgIDk4LFxuICAgICAgMzUsXG4gICAgICAxNDYsXG4gICAgICAxODEsXG4gICAgICAxNzMsXG4gICAgICA4MCxcbiAgICAgIDkxLFxuICAgICAgMjAsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAyNDAsXG4gICAgICAxOTksXG4gICAgICAyNDUsXG4gICAgICAxMzUsXG4gICAgICAxMTcsXG4gICAgICA3MixcbiAgICAgIDQxLFxuICAgICAgNzMsXG4gICAgICA1LFxuICAgICAgNjUsXG4gICAgICAyMDgsXG4gICAgICA5NyxcbiAgICAgIDE0NSxcbiAgICAgIDE2OSxcbiAgICAgIDEyOSxcbiAgICAgIDEsXG4gICAgICA4MCxcbiAgICAgIDk1LFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJSRlkzOVBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNzgyMDk5NzY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5ODAxMTMzMDI3MzI5NToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN2lpNFVIRUt5anM3VUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5HUVo4OUo3UkJPTW9hNC9RY0V4OXkvRS9sNkxJUlNjb3NJM3ZPSnFkanc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQmxuRzBRb1NSUmFYS0xKdlp4L0ZQcGZocngrOGkrUG1vUmNnb092ZThSYU1tMzI4UmNqRkZQclZDaEZEZG1Sa1pTc0cvMTBFeHF5cnRLb1k5ZlRZQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmpmQkR4aDlCQi91UU9OckdkZlljODRLV3BvaGZBK09jWHFRb2Z1SDV4bXV5dkZZV2hZbU5oK3FlclF4bEFhbm84LzNIMzVPcmZrVytJTElIaXdMaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzc4MjA5OTc2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjAxOTA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTAvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJMC8uanNvbiI6IHt9Cn0=|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
