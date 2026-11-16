const respond = require('./_helper.js');
const U = '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉';
module.exports = (req, res) => {
  const text = (req.query.txt || '').toString();
  const out = [...text].map(ch => {
    const u = ch.toUpperCase().charCodeAt(0);
    if (u >= 65 && u <= 90) return U[u-65];
    return ch;
  }).join('');
  respond(res, out);
};
