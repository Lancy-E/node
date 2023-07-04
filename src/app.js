const express=require("express");
const app=express();
app.use(express.json());

const AuthRoute=require('./routes/auth.js');
const router = require("./routes/auth.js");
app.use("/",AuthRoute);
router.get("/",(req,res)=>
{
    res.send("ok");
})
router.post("/",(req,res)=>
{
    res.send("hiii");
   
})

module.exports=router;


app.listen(4000,()=>
{
    console.log("server listening at port 4000")
}
);
