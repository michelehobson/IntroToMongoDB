import express from 'express';
import restaurants from './routes/restaurants.mjs';

const app = express();
const port = process.env.PORT;

app.use('/restaurants', restaurants);

app.use((err, req, res, next) => {
    res.status(500).send()
})

app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`)
})
