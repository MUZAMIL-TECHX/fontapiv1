module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const text = (req.query.txt || '').toString();
  
  const MAP = {
    a:'ᗩ',b:'ᗷ',c:'ᑕ',d:'ᗪ',e:'E',f:'ᖴ',g:'G',h:'ᕼ',i:'I',j:'ᒍ',
    k:'K',l:'ᒪ',m:'ᗰ',n:'ᑎ',o:'O',p:'ᑭ',q:'ᑫ',r:'ᖇ',s:'ᔕ',t:'T',
    u:'ᑌ',v:'ᐯ',w:'ᗯ',x:'᙭',y:'Y',z:'ᘔ'
  };
  
  const out = [...text].map(ch => MAP[ch.toLowerCase()] || ch).join('');

  res.status(200).json({
    creator: 'c9muzamil', contect: '923130122643', team: 'TeamRedXhackers',
    channel: 'https://whatsapp.com/channel/0029VbCkm3rAe5VzCYLtNb2u', font: out
  });
};
