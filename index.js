import express from 'express';
import { PORT } from './config.js';
import { ConnectionDB } from './Database/Connection.js';
import { router } from './Routes/Productroute.js';

const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', router);

if (ConnectionDB) {
    app.listen(PORT, () => {
        console.log(`Server Running on PORT ${PORT}`);
    })
}

