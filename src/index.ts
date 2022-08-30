import express from 'express';
import cors from 'cors';
import productRouter from './routers/product-router';


const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/api', productRouter)

app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})