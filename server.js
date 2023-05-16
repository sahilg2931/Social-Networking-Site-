const express = require('express');

const app = express();
app.get('/',(req,rest)=> res.send('API Running '));
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log('server started at the port ${PORT} '));

