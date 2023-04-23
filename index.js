const {db}=require('./util/admin');
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const port=  process.env.PORT || 30514;

const NamesModel=require('./models/Names');
const app=express(); 
app.use(express.json());
app.use(cors()); 

const {usernames}=require('./models/firenames');

app.get('/',(req,res)=>{
    // res.json({ message: "Hello from server!" });
    res.send("Hello from the server");
});

//  firestore
app.get('/names',usernames);
const addNames = async (req, res) => {
    const { name} = req.body
    try {
      const entry = db.collection('users').doc()
      const entryObject = { 
        name
      }
  
      entry.set(entryObject);
      res.status(200).send({
        status: 'success',
        message: 'entry added successfully',
        data: entryObject
      })
    } catch(error) {
        res.status(500).json(error.message)
    }
  }
app.post('/setnames', addNames);
//  firestore

app.listen(port, console.log("Server running"));
