const express = require("express")
const bodyParser = require("body-parser");



const app = express();


app.use(express.urlencoded())
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/" , function(req , res){
  res.render("home")
});
app.get("/feedback" , function(req , res){
  res.render("feedback")
});
app.post("/" , function(req , res){
  res.send("Thankyou for trusting us!! We will email you in a Day.")
})

app.listen(3000 , function(){
  console.log("The server is running on port 3000")
})
