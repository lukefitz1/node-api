const User = require("../../../database/models").User;

module.exports = {
  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  }
};
