const mongoose =require("mongoose");

require("dotenv").config();

 const mongoDBError = require("mongoose-mongodb-errors")

mongoose.Promise=global.Promise;
mongoose.plugin(mongoDBError);

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true }).then((err) => {
 
})