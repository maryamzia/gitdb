const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser =require("body-parser")
const morgan = require("morgan")
require("express-async-errors")
//const mongodb =require("mongodb")

require("./mongo")

require("./model/Post")


 app.use(bodyParser.json())
 .use(morgan());
app.use("/posts",require("./routes/posts"))
app.use((req,res,next)=>{
req.status= 404;
const error = new  ("routes not found");

next(error);
});

if(app.get("env")==="production"){
    app.use((error,req,res,next)=>{  
        res.status(req.status||500).send({
            message:error.message,
            
        });
    });
}




app.listen(1100, function() {
    console.log("server is running on 1100")
})
