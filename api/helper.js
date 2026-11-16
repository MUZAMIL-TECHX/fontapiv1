// api/_helper.js
module.exports = function respond(res, fontText) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({
    creator: 'c9muzamil',
    contect: '923130122643',
    team: 'TeamRedXhackers',
    channel: 'https://whatsapp.com/channel/0029VbCkm3rAe5VzCYLtNb2u',
    font: fontText
  });
};
