const respond = require('./_helper.js');
const U = 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ';
const L = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ';
module.exports = (req, res) => {
  const text = (req.query.txt || '').toString();
  const out = [...text].map(ch => {
    const u = ch.charCodeAt(0);
    if (u >= 65 && u <= 90) return U[u-65];
    if (u >= 97 && u <= 122) return L[u-97];
    return ch;
  }).join('');
  respond(res, out);
};
