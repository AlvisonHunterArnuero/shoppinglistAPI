const contact = (req, res) => {
  const { title, menu } = req.app.locals;
  const content = '<p>Hey, drop us some lines here, fellow!</p>';
  res.send(
    `<strong>${title} <i>${req.originalUrl}.</i></strong><hr /> ${content} ${menu}`
  );
};
exports = contact;
