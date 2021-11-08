const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connect() {
    return new Promise((resolve, reject) => {
          mongoose.connect(process.env.DB_CONNECT,
            { useNewUrlParser: true,
             
                 // useNewUrlParser: true,    
              //useUnifiedTopology: true,   
               //useCreateIndex: true,    
               //useFindAndModify: false,
              
              }
      )
            .then((res, err) => {
              if (err) return reject(err);
              resolve();
            })
    
    });
  }
  module.exports=connect
  