const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.post('/api/register', async (req,res) =>{
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({statue:'ok'});
    } catch (error) {
        res.json({statue:'error'});
    }
    res.json({status: 'success'});
});

// app.post('/api/login', async (req,res) =>{
//     try {
   
//         })
//         res.json({statue:'ok'});
//     } catch (error) {
//         res.json({statue:'error'});
//     }
//     res.json({status: 'success'});
// });





app.listen(1337,()=>{
    console.log("server started!");
});

