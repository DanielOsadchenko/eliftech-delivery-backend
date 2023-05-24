const { Order } = require("../../models");

const addOrders = async (req, res) => {
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = addOrders;
