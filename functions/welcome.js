const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./database/welcome.json'));

const welAwal = `๐ฏ๐๐๐ @user 
๐๐๐๐๐๐๐๐๐๐/๐ เงเญญ ๐: *@group*

โธ  ๐ฌ๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐.
ใ ๐น๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐๐๐๐.
๐๐  ๐ซ๐๐๐๐๐๐รก ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐/๐. โกฬถโกเฐโน3
:เฝฟ ๐ผ๐๐ /๐๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐รบ ๐๐๐ ๐๐๐.
แฑ  ๐น๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐.
โ โ ๐ฌ๐๐๐รก ๐๐ ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐.
โฟปโโทาเฉญโโ`;

const byeAwal = `๐จ๐๐รณ๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐ *@user*
๐บ๐๐๐รณ ๐๐ *@group*`;
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
