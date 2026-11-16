module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const text = (req.query.txt || '').toString();
  
  const out = [...text].map(ch => {
    const u = ch.charCodeAt(0);
    if (u >= 33 && u <= 126) return String.fromCharCode(u + 0xFEE0);
    if (u === 32) return '\u3000';
    return ch;
  }).join('');

  res.status(200).json({
    creator: 'c9muzamil', contect: '923130122643', team: 'TeamRedXhackers',
    channel: 'https://whatsapp.com/channel/0029VbCkm3rAe5VzCYLtNb2u', font: out
  });
};
