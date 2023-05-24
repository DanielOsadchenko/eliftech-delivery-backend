const { Product } = require("../../models");

const getProductById = async (req, res) => {
  const { id } = req.params;
  const data = await Product.findById(id);
  if (!data) {
    throw new Error(404, `Contact with id = ${id} not found!`);
  }
  res.json(data);
};

module.exports = getProductById;
