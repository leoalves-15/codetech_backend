import express from "express";
import {
  getItems,
  getItem,
  getItemsSelected,
} from "../database/models/Product";

const productRouter = express.Router();

productRouter.get("/products", (req, res) => {
  getItems(res);
});

productRouter.get("/products/ids/:ids", (req, res) => {
  var arrayIDS = req.params.ids.split("_");
  getItemsSelected(res, arrayIDS);
});

productRouter.get("/product/:id", (req, res) => {
  const id: number = +req.params.id;
  getItem(res, id);
});

export default productRouter;
