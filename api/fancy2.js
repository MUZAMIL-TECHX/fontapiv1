module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const text = (req.query.txt || '').toString();
  
  const U = '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁';
  const L = '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛';
  
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
