const mongoose = require("mongoose");

const modelViewer = new mongoose.Schema(
    {
       
    },
    { timestamps: true }
);
module.exports = mongoose.model("modelViewer", modelViewer);