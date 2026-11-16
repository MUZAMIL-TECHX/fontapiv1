const respond = require('./_helper');
module.exports = (req, res) => {
  const text = (req.query.txt || '').toString();
  const out = [...text].map(ch => {
    const u = ch.charCodeAt(0);
    if (u >= 33 && u <= 126) return String.fromCharCode(u + 0xFEE0);
    if (u === 32) return '\u3000';
    return ch;
  }).join('');
  respond(res, out);
};
