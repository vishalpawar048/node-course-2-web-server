const express=require('express');

const port=process.eventNames.PORT || 3000;
var app=express();

app.get('/',(req,res)=>{

    res.send(`<h1>Hello Express</h1>`);
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});