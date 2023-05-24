const { Schema, model } = require('mongoose');

const shopSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
    },

    shopId: {
      type: String,
      required: true,
    },
  },

  { versionKey: false, timestamps: true },
);

const Shop = model('shop', shopSchema);

module.exports = {
  Shop,
};
