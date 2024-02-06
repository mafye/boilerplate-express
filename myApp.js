let express = require('express');
let app = express();
console.log("Hello World");
app.get('/', (req, res) => {
    // 发送一个“Hello Express”字符串
    res.send('Hello Express');
});




































module.exports = app;
