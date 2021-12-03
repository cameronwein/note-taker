const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/test', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => {
    console.log(`API server now on port 3001.`)
});