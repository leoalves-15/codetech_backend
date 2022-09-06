import express from 'express';
import cors from 'cors';
import productRouter from './routers/product-router';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use('/api', productRouter);

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {})