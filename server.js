const  express = require("express"); // express is function stored in a variable express
const app = express();
const path = require("path");

const imagePath = path.join(__dirname,'kalampic');/*these two line for using image in the html page so tht the user can view it*/ 
app.use('/kalampic',express.static(imagePath));




app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"nligiris.html"));
})

app.listen(3210,()=>{// to make the server listn 
    console.log("server1 is running");
}
)

app.get("/jackson",(req,res)=>{
    res.sendFile(path.join(__dirname,"achivements.html"));
})



app.get("/apj",(req,res)=>{
    res.sendFile(path.join(__dirname,"achivements1.html"));
})
/*
mongo db is unstructured data base
cluster== group of database
mangus --> it shows only the  predefined schema(eg name ,id,roll number) you can say wht you need ie is schema
mogoclient --> without the above
*/

