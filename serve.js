const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/valeverde'));

app.get('/+',(req,resp)=>{

    resp.sendFile(__dirname + '/dist/valeverde/index.html')

})

app.listen(PORT,()=>{
    console.log('Servidor iniciado na porta:' + PORT);
})