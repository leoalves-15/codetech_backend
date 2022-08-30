import express from 'express';

const productRouter = express.Router();

productRouter.get('/products', (req, res) => {
    res.send('Lê todos os product');
});

productRouter.get('/product/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Lê o product ${id}`);
})
export default productRouter;