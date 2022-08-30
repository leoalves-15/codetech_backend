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
})

export default Product;