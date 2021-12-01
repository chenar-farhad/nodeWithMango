import { Router } from "express";
import ProductModel from "../models/products.model.js";
const router = Router();

/*--START insert --*/
router.post("/product", async (req, res) => {
  const product = new ProductModel(req.body);
  await product.save();
  res.json({ message: "product created" });
});
/*  --------------END insert--------------  */

/*--START Search --*/
router.get("/product", async (req, res) => {
  const product = await ProductModel.find({});
  res.json(product);
});
/*  --------------END Search--------------  */

/*-- START Search By ID --*/
router.get("/product/:id", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  res.json(product);
});
/*  --------------END search by ID--------------  */

export default router;
