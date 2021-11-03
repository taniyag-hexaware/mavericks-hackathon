const mongoose = require("mongoose");

const modelViewer = new mongoose.Schema(
    {
        IosSrc:{
            type:String,
            
        },
        Src:{
            type:String
        },
        Description:{
            type:String
        },
        Model_ID:{
            type:String
        },
        Color:{
            type:String
        },
        SubCategory:{
            type:String
        },
        Product_Image:{
            type:String
        },
        PriceText:{
            type:String
        },
        Price:{
            type:Number
        },
        Name:{
            type:String
        },
        Short_Description:{
            type:String
        },
        variants:{
            type:String
        }


    },
    { timestamps: true }
);
module.exports = mongoose.model("modelViewer", modelViewer);