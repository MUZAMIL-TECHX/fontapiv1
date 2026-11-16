const respond = require('./_helper.js');
const U = '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕';
const L = '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯';
module.exports = (req, res) => {
  const text = (req.query.txt || '').toString();
  const out = [...text].map(ch => {
    const u = ch.charCodeAt(0);
    if (u >= 65 && u <= 90) return U[u-65];
    if (u >= 97 && u <= 122) return L[u-97];
    return ch;
  }).join('');
  respond(res, out);
};
