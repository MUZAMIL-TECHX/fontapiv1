const respond = require('./_helper.js');
const MAP = {
  a:'ꓮ',b:'ꓐ',c:'ꓚ',d:'ꓓ',e:'ꓰ',f:'ꓝ',g:'ꓖ',h:'ꓧ',i:'ꓲ',j:'ꓙ',
  k:'ꓗ',l:'ꓡ',m:'ꓟ',n:'ꓠ',o:'ꓳ',p:'ꓑ',q:'ꓩ',r:'ꓣ',s:'ꓢ',t:'ꓔ',
  u:'ꓴ',v:'ꓦ',w:'ꓪ',x:'ꓫ',y:'ꓬ',z:'ꓜ'
};
module.exports = (req, res) => {
  const text = (req.query.txt || '').toString();
  const out = [...text].map(c => MAP[c.toLowerCase()] || c).join('');
  respond(res, out);
};
