module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const text = (req.query.txt || '').toString();
  
  const U = '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕';
  const L = '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯';
  
  const out = [...text].map(ch => {
    const u = ch.charCodeAt(0);
    if (u >= 65 && u <= 90) return U[u-65];
    if (u >= 97 && u <= 122) return L[u-97];
    return ch;
  }).join('');

  res.status(200).json({
    creator: 'c9muzamil', contect: '923130122643', team: 'TeamRedXhackers',
    channel: 'https://whatsapp.com/channel/0029VbCkm3rAe5VzCYLtNb2u', font: out
  });
};
