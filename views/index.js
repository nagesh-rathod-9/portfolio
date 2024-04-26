var express=require("express")
var mysql=require("mysql")
var bodyparser=require("body-parser")

var app=express()
app.use(bodyparser.urlencoded({extended:true}))

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs4"
})

app.get("/",function(req,res){
    res.render("save_message.ejs")
})

app.post("/save_message",function(req,res){
    var data=req.body;
    var sql=`INSERT INTO form_data(name,message) VALUES ('${data.name}','${data.message}')`
    conn.query(sql,function(err,data){

    })
})
app.listen(1000)
//CREATE TABLE form_data(user_id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(100),message VARCHAR(200))