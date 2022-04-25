const { User } = require("../../database/models");
module.exports = {
  show: async (req, res) => {
    const userList = await User.findAll({});
    return res.json(userList);
  },
  detail: async (req, res) => {
    try {
      const oneUser = await User.findByPk(req.params.id);
      if (oneUser) {
        return res.status(200).json({
          status: 200,
          UserInfo: oneUser
        });
      }
      return res.status(404).json({
        status: 404,
        message: "No se encontró un User",
        UserInfo: null
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Es el User seleccionado",
        UserInfo: error,
      })
    }
  },
  test: async (req, res) => {
    return res.render("User");
  },
  testPost: async (req, res) => {
    return res.json(req.body)
  }
};