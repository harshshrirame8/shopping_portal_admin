const mongoose = require("mongoose")

const ProdSchema = new mongoose.Schema({
    id :{
        type : Number,
    },
    name : {
        type : String,
    },
    price :{
        type : Number,
    },
    link :{
        type : String,
    },
    desc :{
        type : String,
    },
    category :{
        type : String,
    }

})

const Prod = mongoose.model("product" , ProdSchema)
module.exports = Prod