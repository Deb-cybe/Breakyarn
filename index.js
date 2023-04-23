const express=require('express');
const cors=require('cors');

const app=express();
const port=process.env.PORT || 60118;
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This works.");
})

app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
})
