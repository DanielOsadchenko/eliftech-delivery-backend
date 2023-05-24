const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    imgUrl: {
      type: String,
    },

    title: {
      type: String,
      required: true,
      minlength: 2,
    },

    descr: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0.01,
    },

    shopId: {
      type: String,
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = {
  Product,
};
