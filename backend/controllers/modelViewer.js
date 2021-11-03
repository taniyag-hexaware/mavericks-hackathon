//const model = require("mongoose");
const modelViewer = require("../models/modelViewer");
//const logger = require('../logger')

//To create a model viewer
exports.createmodel = (req, res) => {

    const ModelViewer = new modelViewer({
      IosSrc: req.IosSrc,
      Src: req.body.Src,
      Description: req.body.Description,
      Model_ID: req.body.Model_ID,
      Color: req.body.Color,
      SubCategory: req.body.SubCategory,
      Product_Image: req.body.Product_Image,
      PriceText: req.body.PriceText,
      Price: req.body.Price,
      Name: req.body.Name,
      Short_Description: req.body.Short_Description,
      variants: req.body.variants,
  
    });
  
    ModelViewer.save().then(data => {
      res.status(201).send({result:data});
    }).catch(err => {
    //   logger.error("Something went wrong while creating new model.")
      res.status(500).send({
  
        result: err.message || "Something went wrong while creating new model."
      });
  
    });
  
  
  };


  //To get all the models
exports.getAllmodels = (req, res) => {
    modelViewer.find()
      .sort("-createdAt")
      .exec((err, models) => {
        // error checking
        if (err || !models) {
        //   logger.error("Bad request. Models cannot be found")
          return res.status(400).json({
            result: "Something went wrong in finding all models",
          });
        }
        // logger.info("All models found")
        // return all the model in json format
        res.status(200).json({result:models});
      });
  };


  //To get all the model by modelid
exports.getmodel = (req, res) => {

    modelViewer.findById(req.params.id)
      .then(model => {
        if (!model) {
        //   logger.warn("The modelId " + req.params.id + " does not exist")
          return res.status(404).send({
            result: "model not found with id " + req.params.id
          });
        }
  
        res.status(200).send({result:model});
        // logger.info("model found with id " + req.params.id)
      }).catch(err => {
        if (err.kind === 'ObjectId') {
        //   logger.error("Incorrect modelId " + req.params.id)
          return res.status(404).send({
            result: "model not found with id " + req.params.id
          });
        }
        // logger.error("Error getting model with id " + req.params.id)
        return res.status(500).send({
          result: "Error getting model with id " + req.params.id
        });
      });
  };
  
  
  //To update a model
exports.updatemodel = (req, res) => {
    // Validate Request
  
    if (!req.body) {
    //   logger.warn("Incomplete Body")
      return res.status(400).send({
        result: "Please fill all required field"
      });
    }
    // Find model and update it with the request body
    model.findByIdAndUpdate(req.params.id, {
        IosSrc: req.IosSrc,
        Src: req.body.Src,
        Description: req.body.Description,
        Model_ID: req.body.Model_ID,
        Color: req.body.Color,
        SubCategory: req.body.SubCategory,
        Product_Image: req.body.Product_Image,
        PriceText: req.body.PriceText,
        Price: req.body.Price,
        Name: req.body.Name,
        Short_Description: req.body.Short_Description,
        variants: req.body.variants,
  
    }, { new: true })
      .then(model => {
        if (!model) {
        //   logger.warn("The modelId " + req.params.id + " does not exist")
          return res.status(404).send({
            result: "model not found with id " + req.params.id
          });
        }
        // logger.info("The model with modelId " + req.params.id + " is updated")
        res.status(201).send({result:model});
      }).catch(err => {
        if (err.kind === 'ObjectId') {
        //   logger.error("Incorrect modelId " + req.params.id)
          return res.status(404).send({
            result: "model not found with id " + req.params.id
          });
        }
        // logger.error("Error updating model with id " + req.params.id)
        return res.status(500).send({
          result: "Error updating model with id " + req.params.id
        });
      });
  };
  
  
  //To delete a model
  exports.deletemodel = (req, res) => {
    modelViewer.findByIdAndRemove(req.params.id)
      .then(model => {
        if (!model) {
        //   logger.warn("The modelId " + req.params.id + " does not exist")
          return res.status(404).send({
            result: "model not found with id " + req.params.id
          });
        }
        // logger.info("The model with modelId " + req.params.id + " is deleted")
        res.status(200).send({ result: "model deleted successfully!" });
      }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        //   logger.error("Incorrect modelId " + req.params.id)
          return res.status(404).send({
            result: "model not found with id " + req.params.id
          });
        }
        // logger.error("Could not delete model with id " + req.params.id)
        return res.status(500).send({
          result: "Could not delete model with id " + req.params.id
        });
      });
  };
  
  // to get modelby category
  exports.getmodelbycategory = (req, res) => {
    modelViewer.find({ 'SubCategory': req.params.category })
      .sort("-createdAt")
      .then(model => {
        if (!model) {
          //logger.warn("The workOrderId " + req.params.id + " does not exist")
          return res.status(404).send({
            result: "model not found with category " + req.params.category
          });
        }
        //logger.info("models with workOrdercategory " + req.params.category + " found successfully")
        res.status(200).send({result:model});
      }).catch(err => {
        if (err.kind === 'String') {
          //logger.error("Incorrect workOrdercategory " + req.params.category)
          return res.status(404).send({
            result: "model not found with category " + req.params.category
          });
        }
        //logger.error("Error getting model with category "+ req.params.category)
        return res.status(500).send({
          result: "Error getting model with category " + req.params.category
        });
      });
  };
  
  