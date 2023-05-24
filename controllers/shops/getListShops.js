const { Shop } = require("../../models");

const getListShops = async (req, res) => {
  const data = await Shop.find({});
  res.json(data);
};

module.exports = getListShops;
