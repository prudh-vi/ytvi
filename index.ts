
const express=require('express');
const app=express();
const PORT:number =8383;
let data=['james']
app.use(express.json());

app.get('/',(req,res)=>{
   
    res.send(`
        <body style="background:pink;color:blue">
        <h1>data</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
        </body>
        
        
        `)

})
app.get('/dashboard',(req,res)=>{
   
    res.send("<h1>Dashboard</h1>")
})

app.get('/api/data',(req,res)=>{
    console.log('this is one is for data')
    res.status(201).send(data);
})

app.post('/api/data',(req,res)=>{
    const newEntry=req.body;
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data',(req,res)=>{
    data.pop()
    console.log('we deleted the user')
    res.sendStatus(203);
})

app.listen(PORT,()=>{
    console.log(
        `server is running on port ${PORT}`
    )
});


//curd create-post read-get update-put delete-delete