const { Product } = require("../../database/models");

module.exports = {
  all: async (req, res) => {
    const ProductList = await Product.findAll({});
    return res.json(ProductList);
  },
  detail: async (req, res) => {
    try {
      const oneProduct = await Product.findByPk(req.params.id);
      if (oneProduct) {
        return res.status(200).json({
          status: 200,
          productInfo: oneProduct
        });
      }
      return res.status(404).json({
        status: 404,
        message: "No se encontró un producto",
        productInfo: null
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Es el producto seleccionado",
        productInfo: error,
      })
    }
    
  },
  test: async (req, res) => {
    return res.render("Product");
  },
  testPost: async (req, res) => {
    return res.json(req.body)
  }
};
