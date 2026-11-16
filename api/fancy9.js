const respond = require('./_helper.js');
const MAP = {
  a:'ᗩ',b:'ᗷ',c:'ᑕ',d:'ᗪ',e:'E',f:'ᖴ',g:'G',h:'ᕼ',i:'I',j:'ᒍ',
  k:'K',l:'ᒪ',m:'ᗰ',n:'ᑎ',o:'O',p:'ᑭ',q:'ᑫ',r:'ᖇ',s:'ᔕ',t:'T',
  u:'ᑌ',v:'ᐯ',w:'ᗯ',x:'᙭',y:'Y',z:'ᘔ'
};
module.exports = (req, res) => {
  const text = (req.query.txt || '').toString();
  const out = [...text].map(ch => MAP[ch.toLowerCase()] || ch).join('');
  respond(res, out);
};
