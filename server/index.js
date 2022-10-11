const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({message: "it works"})
})

app.listen(3030, () => console.log('Server run on port:3030'))