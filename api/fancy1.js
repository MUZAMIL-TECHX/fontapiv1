module.exports = (req, res) => {
  // CORS aur JSON headers set kar rahe hain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  // URL se text utha rahe hain
  const text = (req.query.txt || '').toString();
  
  // Fancy 1 (Lisu style) ka map
  const MAP = {
    a:'ꓮ',b:'ꓐ',c:'ꓚ',d:'ꓓ',e:'ꓰ',f:'ꓝ',g:'ꓖ',h:'ꓧ',i:'ꓲ',j:'ꓙ',
    k:'ꓗ',l:'ꓡ',m:'ꓟ',n:'ꓠ',o:'ꓳ',p:'ꓑ',q:'ꓩ',r:'ꓣ',s:'ꓢ',t:'ꓔ',
    u:'ꓴ',v:'ꓦ',w:'ꓪ',x:'ꓫ',y:'ꓬ',z:'ꓜ'
  };
  
  // Text ko convert kar rahe hain
  const out = [...text].map(c => MAP[c.toLowerCase()] || c).join('');

  // Direct JSON response bhej rahe hain
  res.status(200).json({
    creator: 'c9muzamil',
    contect: '923130122643',
    team: 'TeamRedXhackers',
    channel: 'https://whatsapp.com/channel/0029VbCkm3rAe5VzCYLtNb2u',
    font: out
  });
};
