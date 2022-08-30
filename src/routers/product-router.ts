import express from 'express'; 
import Product from '../database/models/Product';

const productRouter = express.Router();

productRouter.get('/products', (req, res) => {
    res.send('Lê todos os product');
    Product.findAll().then(function(teste: any){
        console.log('todos', teste)
    });
});

productRouter.get('/product/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Lê o product ${id}`);
})
export default productRouter;