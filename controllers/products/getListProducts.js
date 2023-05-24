const { Product } = require("../../models");

const getListProducts = async (req, res) => {
  const data = await Product.find({});
  res.json(data);
};

module.exports = getListProducts;
