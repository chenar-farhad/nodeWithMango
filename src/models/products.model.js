import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String,
  price: Number,
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
