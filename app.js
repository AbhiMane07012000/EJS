const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items=["Buy Food","cook Food","Eat Food"];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  let today= new Date();

  let option= {
    weekday:"long",day:"numeric",month:"long"
  }

//   var day = today.toLocaleDateString("Mar-IN",option);

  let day = today.toLocaleDateString("en-US",option);

  res.render("index",{CurrentDate:day ,Items:items})

});



app.post("/", function(req,res){

    let newitem= req.body.newItem;

    items.push(newitem);

    res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
