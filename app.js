
const express = require('express');
const bodyParser = require('body-parser');
const date=require(__dirname+'/date.js');

const  items=["cook food","eat food","sleep"];
const  workItems=[];
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    
    const day=date.getDate();
    res.render('list', {listTitle: day,newListItems: items});

});
app.post('/', (req, res) => {
     const item=req.body.newItem;
     if(req.body.list==="Work"){
            workItems.push(item);
            res.redirect("/work");  
     }else{
        items.push(item);
        res.redirect('/');
     }
    
     
});

app.get("/work",(req,res)=>{
    res.render("list",{listTitle: "Work List",newListItems: workItems});

});
app.get("/about",(req,res)=>{
    res.render("about");
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

















