import express, { Application } from "express";
import { neru } from 'neru-alpha';

const app:Application = express();
const port = process.env.NERU_APP_PORT;

app.use(express.json());

app.get('/_/health', async (req, res) => {
    res.sendStatus(200);
});

app.get('/', async (req, res, next) => {
    res.send('hello world').status(200);
});

app.get('/token', async (req, res, next) => {
    const token = neru.createVonageToken({exp: Date.now()+100000000});
    res.json({
        token
    }).status(200);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
