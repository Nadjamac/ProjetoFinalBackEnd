
const express = require('express');
const app =express();
app.use(express.json());

const Conn = require('./models/conn/conn');

Conn ();
const port = 8000;

const routine =require ('./routers/routines.routes')
app.use('/routines',routine)


app.listen(port,()=>{ 
    console.log (`running on the port ${port}`);
});