const express = require("express");
const router = express.Router();

// these are the controllers
const {
    createmodel,
    getAllmodels,
    updatemodel,
    deletemodel,
    getmodel,
    getmodelbycategory
  
} = require("../controllers/modelViewer");



// to get all the model
router.get("/models/", getAllmodels);

// to create a model
router.post("/model/create/", createmodel);

// to update the model
router.put("/model/update/:id/",  updatemodel);

// to delete the model
router.delete("/model/delete/:id/", deletemodel);

// to get model by id
router.get("/model/:id/", getmodel);

// to get model by category
router.get("/model/category/:category/", getmodelbycategory);


// we will export the router to import it in the index.js
module.exports = router;
