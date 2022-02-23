const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./database/welcome.json'));

const welAwal = `𝑯𝒐𝒍𝒂 @user 
𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐/𝒂 ৎ୭ 𝒂: *@group*

⸙  𝑬𝒔𝒑𝒆𝒓𝒂𝒎𝒐𝒔 𝒒𝒖𝒆 𝒍𝒐 𝒑𝒂𝒔𝒆𝒔 𝒎𝒖𝒚 𝒃𝒊𝒆𝒏 𝒎𝒂𝒓𝒊𝒄𝒐𝒏 𝒄𝒖𝒍𝒊𝒂𝒐.
ㄔ 𝑹𝒆𝒔𝒑𝒆𝒕𝒂 𝒍𝒂𝒔 𝒓𝒆𝒈𝒍𝒂𝒔 𝒑𝒂𝒓𝒂 𝒆𝒗𝒊𝒕𝒂𝒓 𝒊𝒏𝒄𝒐𝒏𝒗𝒆𝒏𝒊𝒆𝒏𝒕𝒆𝒔.
𐇔𐇓  𝑫𝒊𝒔𝒇𝒓𝒖𝒕á 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒄𝒉𝒊𝒔𝒕𝒐𝒔𝒐/𝒂. ♡̶♡ఇ‹3
:ཿ 𝑼𝒔𝒂 /𝒉𝒆𝒍𝒑 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒆𝒍 𝒎𝒆𝒏ú 𝒅𝒆𝒍 𝒃𝒐𝒕.
ᕱ  𝑹𝒆𝒄𝒖𝒆𝒓𝒅𝒂 𝒏𝒐 𝒔𝒂𝒕𝒖𝒓𝒂𝒓 𝒆𝒍 𝒃𝒐𝒕.
⛂ ⛀ 𝑬𝒗𝒊𝒕á 𝒆𝒍 𝒔𝒑𝒂𝒎 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔.
⿻⎙✷҂੭☆★`;

const byeAwal = `𝑨𝒅𝒊ó𝒔 𝒎𝒂𝒓𝒊𝒄𝒐𝒏 𝒄𝒖𝒍𝒊𝒂𝒐 *@user*
𝑺𝒂𝒍𝒊ó 𝒅𝒆 *@group*`;
/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 * @returns {boolean}
 */
const addCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = true;
    }
  });
  if (position === false) {
    const obj = { 
      from: chatId, 
      textwelcome: welAwal,
      textbye: byeAwal
    };
    Wel.push(obj);
    fs.writeFileSync('./database/welcome.json', JSON.stringify(Wel, null, "\t"));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textwelcome;
  }
};
/**
 * Get Custom bye Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textbye;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomWelcome = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = value;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomBye = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = value;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = welAwal;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = byeAwal;
  }
};

module.exports = {
  Wel,
  addCustomWelcome,
  getCustomWelcome,
  setCustomWelcome,
  delCustomWelcome,
  getCustomBye,
  setCustomBye,
  delCustomBye
};
