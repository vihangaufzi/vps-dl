const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
LANG: 'EN' , 
FOOTER: 'ᴀꜱᴛʀᴏ-ᴍᴅ ᴍᴏᴠɪᴇ ᴅʟ ʙᴏᴛ',
CAP: 'Generated By Astro Bot',
ONLY_GROUP: 'false',
INBOX_BL_MSG: `*Only group is on*`,
HOST: `VPS`,
SUDO: `76428274874 1734878723 `,
SESSION_ID: ``
};
