const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


const routes = require("./routes/"); // index.js 는 / 와 같으므로 생략 가능

app.use(routes) // use 는 경로에 대한 확장성을 의미한다.


app.listen(port,() => console.log(`Listning on port ${port}`));
