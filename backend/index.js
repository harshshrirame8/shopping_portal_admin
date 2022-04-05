const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const ProdModel = require("./model/product");

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/' , {
    dbName: 'product-database',
    useNewUrlParser:true,
});

app.get('/read' , async (req , res) => {
    ProdModel.find({} , (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

app.delete('/delete/:id' , async (req, res) =>{
    const p_id = req.params.id
    await ProdModel.findOneAndRemove({id : p_id}).exec()
    res.send("Data Deleted")
})

app.put('/update' , async (req ,res) =>{
    try{
        await ProdModel.findOne({id : req.body.id}, (err , currprod) =>{
            try{
                if(req.body.name !== ''){
                    currprod.name = req.body.name
                }
                if(req.body.link !== ''){
                    currprod.link = req.body.link
                }
                if(req.body.price !== ''){
                    currprod.price = req.body.price
                }
                currprod.save()
                res.send("Data Updated")
            }
            catch(err){
                console.log(err)
            }
        })
    }
    catch(err){
        console.log(err)
    }
})


app.post('/insert' , async (req ,res) =>{
    const prod = ProdModel({
        id : req.body.id,
        name : req.body.name,
        price :req.body.price,
        link :req.body.link,
        desc :req.body.desc,
        category :req.body.cat,
    })
    try{
        await prod.save();
        res.send("Data Inserted")
    }
    catch(err){
        console.log(err)
    }
})

app.get('/' , async (req , res) =>{
    const prod = ProdModel({id : 1 , name  : "Book"})
    try{
        await prod.save();
        res.send("Data Inserted")
    }
    catch(err){
        console.log(err)
    }
})

app.listen(5000 , () =>{
    console.log("Running......")
});