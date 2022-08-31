const connetion = require('../connection');

const Product = connetion.sequelize.define('product',{
    Title_Product:{
        type: connetion.Sequelize.STRING
    }, 
    Thumbnail_Product:{
        type: connetion.Sequelize.STRING
    }, 
    Stock_Product:{
        type: connetion.Sequelize.DOUBLE
    },
    Avaliation_Product:{
        type: connetion.Sequelize.DOUBLE
    },
    SalePrice_Product:{
        type: connetion.Sequelize.DOUBLE
    },
    ListPrice_Product:{
        type: connetion.Sequelize.DOUBLE
    },
});

export const getItems = async (res: any) => {
    try {
        const allProducts = await Product.findAll();

        return res.status(200).json(allProducts);
    } catch{
        return res.status(400).json({menssage: "serve erro"});
    }
}

export const getItem = async (res: any, id: number) => {
    try {
        const product = await Product.findOne({ where: { id } });
        if (product === null) {
            return res.status(404).json({menssage: "not found!"});
          } else {
            return res.status(200).json(product);
          }
    } catch{
        return res.status(400).json({menssage: "serve erro"});
    }
}
// Product.create({
//     Title_Product: "Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata",
//     Thumbnail_Product: "https://images-americanas.b2w.io/produtos/5267258975/imagens/notebook-vaio-fe15-intel-core-i5-linux-8gb-256gb-ssd-hd-prata/5267259038_1_large.jpg",
//     Stock_Product: 5,
//     Avaliation_Product:5,
//     SalePrice_Product: 500.00,
//     ListPrice_Product: 600.00
// })