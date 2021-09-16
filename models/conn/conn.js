
const mongoose = require('mongoose');

function Conn(){
    mongoose.connect(`mongodb+srv://dbAdmin:hKW8KPYrrydPHWpP@cluster0.m2tax.mongodb.net`,{
    useNewUrlParser : true, 
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Mongodb connected");
}).catch((err) =>{
    console.error(err);
});
}

    module.exports= Conn;
    

