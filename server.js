const express=require('express');

const port=process.env.PORT ||3000;
var app=express();

app.get('/',(req,res)=>{

    res.send(`<h1>Love you shweta</h1>`);
});

app.listen(port,()=>{
    console.log(`server is running on  ${port}`);
});