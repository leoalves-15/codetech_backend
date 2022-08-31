import express from 'express'; 
import {getItems, getItem} from '../database/models/Product';

const productRouter  = express.Router();

productRouter.get('/products', (req, res) => {
    getItems(res);
});

productRouter.get('/product/:id', (req, res) => {
    const id: number = +req.params.id;
    getItem(res, id)
})

export default productRouter;