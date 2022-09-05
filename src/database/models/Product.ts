const connetion = require("../connection");
import { Request, Response } from 'express'

const Product = connetion.sequelize.define("product", {
  Title_Product: {
    type: connetion.Sequelize.STRING,
  },
  Thumbnail_Product: {
    type: connetion.Sequelize.STRING,
  },
  Stock_Product: {
    type: connetion.Sequelize.DOUBLE,
  },
  Avaliation_Product: {
    type: connetion.Sequelize.DOUBLE,
  },
  SalePrice_Product: {
    type: connetion.Sequelize.DOUBLE,
  },
  ListPrice_Product: {
    type: connetion.Sequelize.DOUBLE,
  },
});

export const getItems = async (res: Response) => {
  try {
    const allProducts = await Product.findAll();

    return res.status(200).json(allProducts);
  } catch {
    return res.status(400).json({ menssage: "serve erro" });
  }
};

export const getItemRequest = async (res: Response, id: number) => {
  try {
    const product = await Product.findOne({ where: { id } });
    if (product === null) {
      return "not found!";
    } else {
      return product;
    }
  } catch {
    return "serve erro";
  }
};

export const getItem = async (res: Response, id: number) => {
  try {
    const product = await getItemRequest(res, id);
    if (product === "not found!") {
      return res.status(404).json({ menssage: "not found!" });
    } else {
      return res.status(200).json(product);
    }
  } catch {
    return res.status(400).json({ menssage: "serve erro" });
  }
};

export const getItemsSelected = async (res: Response, id: string[]) => {
  try {
    let products = [];
    for (let i in id) {
      let productA = await getItemRequest(res, parseInt(id[i]));
      products.push(productA);
    }
      return res.status(200).json(products);
  } catch {
    return res.status(400).json({ menssage: "serve erro" });
  }
};
