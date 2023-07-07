const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// const mongoose = require("mongoose");
// const Login = require("./mongodb")

const staticpath = path.join(__dirname,"../public/template");
const partialpath = path.join(__dirname,"../public/partials");
app.use(express.static(staticpath));
app.use(express.json());
app.set("view engine","hbs");
app.set('views',staticpath);
app.use(express.urlencoded({extended:false}));
// app.set("views",viewPath)
hbs.registerPartials(partialpath);

// mongoose.connect("mongodb://localhost:27017/seproject", { useNewUrlParser: true })
//     .then(() => {
//         console.log("MongoDB connected");
//     })
//     .catch((err) => {
//         console.error("MongoDB connection error: ", err);
//     });


app.get("/",function(req,res)
{
    res.render("main")
});
app.get("/admin",function(req,res)
{
    res.render("admin")
});
app.get("/student",function(req,res)
{
    res.render("student")
});

app.get("/student_register",function(req,res)
{
    res.render("student_register")
});

app.get("/admin_register",function(req,res)
{
    res.render("admin_register")
});

app.get("/s_dashboard",function(req,res)
{
    res.render("s_dashboard")
});
app.get("/student_forgotpw",function(req,res)
{
    res.render("student_forgotpw")
});
app.get("/admin_forgotpw",function(req,res)
{
    res.render("admin_forgotpw")
});
app.get("/a_dashboard",function(req,res)
{
    res.render("a_dashboard")
});
app.get("/s_projects",function(req,res)
{
    res.render("s_projects")
});
app.get("/testing",function(req,res)
{
    res.render("testing")
});
app.get("/s_profile",function(req,res)
{
    res.render("s_profile")
});
app.get("/web_dev",function(req,res)
{
    res.render("web_dev")
});
app.get("/ai_ml",function(req,res)
{
    res.render("ai_ml")
});
app.get("/app_dev",function(req,res)
{
    res.render("app_dev")
});
app.get("/uploadp",function(req,res)
{
    res.render("uploadp")
});
app.get("/s_update",function(req,res)
{
    res.render("s_update")
});
app.get("/search_webdev",function(req,res)
{
    res.render("search_webdev")
});
app.get("/search_appd",function(req,res)
{
    res.render("search_appd")
});
app.get("/about",function(req,res)
{
    res.render("about")
});
app.get("/search_aiml",function(req,res)
{
    res.render("search_aiml")
});
app.get("/feedback",function(req,res)
{
    res.render("feedback")
});
app.get("/feedbacklist",function(req,res)
{
    res.render("feedbacklist")
});
app.get("/a_profile",function(req,res)
{
    res.render("a_profile")
});
app.get("/allprojects",function(req,res)
{
    res.render("allprojects")
});
app.get("/uploadtask",function(req,res)
{
    res.render("uploadtask")
});
app.get("/tasktable",function(req,res)
{
    res.render("tasktable")
});
app.get("/dtask",function(req,res)
{
    res.render("dtask")
});
app.get("/a_projects",function(req,res)
{
    res.render("a_projects")
});
app.get("/a_web_dev",function(req,res)
{
    res.render("a_web_dev")
});
app.get("/a_ai_ml",function(req,res)
{
    res.render("a_ai_ml")
});
app.get("/a_app_dev",function(req,res)
{
    res.render("a_app_dev")
});
app.get("/a_app_ap",function(req,res)
{
    res.render("a_app_ap")
});
app.get("/a_app_pend",function(req,res)
{
    res.render("a_app_pend")
});
app.get("/a_allprojects",function(req,res)
{
    res.render("a_allprojects")
});
app.get("/a_web_pend",function(req,res)
{
    res.render("a_web_pend")
});
app.get("/a_web_ap",function(req,res)
{
    res.render("a_web_ap")
});
app.get("/a_aiml_ap",function(req,res)
{
    res.render("a_aiml_ap")
});
app.get("/a_aiml_pend",function(req,res)
{
    res.render("a_aiml_pend")
});
app.get("/aimlcheck",function(req,res)
{
    res.render("aimlcheck")
});
app.get("/webcheck",function(req,res)
{
    res.render("webcheck")
});
app.get("/appcheck",function(req,res)
{
    res.render("appcheck")
});
app.get("/pendingaiml",function(req,res)
{
    res.render("pendingaiml")
});
app.get("/approveaiml",function(req,res)
{
    res.render("approveaiml")
});
app.get("/pendingweb",function(req,res)
{
    res.render("pendingweb")
});
app.get("/approveweb",function(req,res)
{
    res.render("approveweb")
});
app.get("/pendingapp",function(req,res)
{
    res.render("pendingapp")
});
app.get("/approveapp",function(req,res)
{
    res.render("approveapp")
});
app.get("/a_allprojects",function(req,res)
{
    res.render("a_allprojects")
});
app.get("/checkst",function(req,res)
{
    res.render("checkst")
});
app.get("/pending",function(req,res)
{
    res.render("pending")
});
app.get("/searchresult",function(req,res)
{
    res.render("searchresult")
});
// app.post("/admin",async (req,res)=>
// {
// const data ={
//    email:req.body.email,
//    password:req.body.password
// }
// await Login.insertMany([data]);
// res.render("adminlogged");
// })
app.listen(3000,function()
{
    console.log("server listening");
});
