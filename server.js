const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser =require("body-parser")
const morgan = require("morgan")

//const mongodb =require("mongodb")

require("./mongo")


 app.use(bodyParser.json())
 .use(morgan())
 const Post = require("./model/Post");



app.get("/posts", async (req, res) =>{
    try{

        const posts= await Post.find({})
            res.send(posts)
      } catch(error){
      res.status (500)
      
    }
       
    });

    app.get("/posts/:postId", async (req,res)=>{
        try{
      const post= await Post.findOne({_id:req.params.postId})
            res.send(post)
        }catch(error){
            res.status (500)
        }
    });
   
     app.put("/posts/:postId", async (req,res)=>{
try {
      const post = await Post.findByIdAndUpdate({
          _id:req.params.postId},req.body, {
              new:true,
              runValidators:true
              
          })
          res.send(post)
            

}catch(error){
    res.status (500)
}

     });


     app.delete("/posts/:postId",async (req,res)=>{
         try{

        const post =await Post.findByIdAndRemove({
            _id:req.params.postId 
         });

         res.send(post)

        }catch(error){
            res.status (500)
        }
     })

app.post("/posts", (req,res)=>{
    console.log(req.body)
     
        const post =new Post();
        post.title =req.body.title;
        post.content=req.body.content;
        post.save();

        res.send(post)
})


app.listen(1100, function() {
    console.log("server is running on 1100")
})
