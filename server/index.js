const mongoose = require('mongoose');
const express = require('express');
// const cors = require('cors');

async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/furniture-rest', {

        });
        console.log('DB successfully connected');
    } catch (err) { 
        console.error(err);
        return process.exit(1);
    }
    const app = express();
    // app.use(cors());

    // app.get('/data/catalog', (req, res) => {
    //     res.json([])
    // })

    app.listen(3030, () => console.log('Server run on port:3030'))

}

start();
