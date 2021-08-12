//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

const posts=[];

const homeStartingContent="Hello!  Welcome to our home page";
const aboutContent="This is all about our website.";
const contactContent="Contact us here anytime.";

app.get("/",function(req,res){
  res.render("home", {
    startingContent:homeStartingContent,
    posts:posts
  });
});

app.get("/about",function(req,res){
  res.render("about",{about:aboutContent});
});


app.get("/contact",function(req,res){
  res.render("contact",{contContent:contactContent});
});


app.get("/compose",function(req,res){
  res.render("compose");
});


app.post("/compose",function(req,res){
  const post={
    title:req.body.postTitle,
   content:req.body.postBody
 };
 res.redirect("/");
posts.push(post);

});


app.listen(3000,function(){
  console.log("SERVER HIT");
});
