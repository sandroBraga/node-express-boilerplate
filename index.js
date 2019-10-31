const express = require('express')
const cors    = require('cors')
const app     = express()

app.use(cors());

app.listen(3000, () => {
    console.log('Listening on app port 3000');
});

app.get('/', (req, res) => {
    res.send(JSON.stringify({"mensagem":"Hello world"}));
    return;
});

