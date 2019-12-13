const User = require("../../../database/models").User;

module.exports = {
  list(req, res) {
    return User.findAll()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return User.findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found"
          });
        }
        return user
          .update({
            firstName: req.body.firstName || user.firstName,
            lastName: req.body.lastName || user.lastName,
            email: req.body.email || user.email
          })
          .then(() => res.status(200).send(user)) // Send back the updated user.
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
