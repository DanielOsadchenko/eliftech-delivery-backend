const { Shop } = require('./shop');
const { Product } = require('./product');
const { Order, joiSchema } = require('./order');

module.exports = {
  Shop,
  Product,
  Order,
  joiSchema,
};
