import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const app = express()

app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

app.use(cors({
    origin: ['http://localhost:3000']
}))
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})