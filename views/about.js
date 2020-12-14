const about = (req, res) => {
  const { title, menu } = req.app.locals;
  const content = '<p>Hey, Now you are in the about us page, pal!</p>';
  res.send(
    `<strong>${title} <i>${req.originalUrl}.</i></strong><hr /> ${content} ${menu}`
  );
};
exports = about;
