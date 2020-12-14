const home = (req, res) => {
  const { title, menu } = req.app.locals;
  const content = '<p>Welcome to Express Server, buddy!</p>';
  res.send(
    `<strong>${title} <i>${req.originalUrl}.</i></strong><hr /> ${content} ${menu}`
  );
};
exports = home;
