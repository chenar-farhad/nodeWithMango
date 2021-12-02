import { Router } from "express";
import ProductModel from "../models/products.model.js";
const router = Router();

/* -------START PRODUCT------- */
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

/*  --------------START Update--------------  */
router.put("/product/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  res.json("product updated!");
});
/*  --------------END Update--------------  */

/*  --------------START Delete--------------  */
router.delete("/product/:id", async (req, res) => {
  await ProductModel.findByIdAndRemove(req.params.id);
  res.json("product deleted!");
});
/*  --------------END Delete--------------  */

/* -------END PRODUCT------- */

export default router;
