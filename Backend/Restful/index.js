const express= require('express');
const app=express();
const path= require('path')

const {v4:uuid}=require('uuid');




app.get('/tacos',(req,res)=>{
    res.send("Get/tacos response")

})
app.use(express.urlencoded({ extended: true })) ;
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');


const comments = [
    {   id :uuid(),
        username: 'mohit',
        comment: "Hello"
    },
    {   id:uuid(),
        username: 'Sujal',
        comment: 'I am watching a movie'
    },
    { id:uuid(),
        username: 'Kislay',
        comment: 'I am skipping rope'
    },
    {   id:uuid(),
        username: 'Harshpal',
        comment: 'I am Sleeping'
    }
];

app.get('/comments',(req,res)=>{
    res.render('comments/index.ejs', {comments})

})


app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})

app.post('/comments',(req,res)=>{
    console.log(req.body);

    const {username,comment}=req.body;

    comments.push({username,comment,id:uuid()});
    res.redirect('/comments');
    // res.send("it worked!");
})
app.get('/comments/:id',(req,res)=>{

    const {id} = req.params;

    const comment =  comments.find ( c=>c.id === id)
    res.render('comments/show',{comment})

})

app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params;
    console.log(res.body.comment)
    res.send("worked!")
    // const newCommentText=req.body.comment;
    // const foundComment =  comments.find ( c=>c.id === id);
    // foundComment.comment=newCommentText;
    // // res.redirect('/comments');
})
app.post('/tacos',(req,res)=>{
    const {meat,quantity}=req.body;
    
    res.send(`Here is your order: ${meat},${quantity}.`)

})



app.listen(3000,()=>{
    console.log("Running on port 3000")

})