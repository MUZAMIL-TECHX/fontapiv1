module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const text = (req.query.txt || '').toString();
  
  const U = '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ';
  const L = '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫';
  
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
