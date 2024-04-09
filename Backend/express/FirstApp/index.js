const express = require("express")
const app=express()
// console.dir(app)


// app.use((req,res)=>{
//     console.log("new request")
//     // res.send("WE GOT YOUR RESPONSE, HELLO!")
//     res.send("<h1>This is my homepage!</h1>")
//     // res.send({color:'Red'
//     //      })
// })
//It will be executed for every request on the server


app.get('/',(req,res)=>{
    res.send("Welcome to our homepage!!!!")

})
//This is generic resposnse '/'

app.post('/cats',(req,res)=>{

 res.send("This is post request which is different than get request")

})

app.get('/search',(req,res)=>{
    // console.log(req.query);
    const {q}= req.query;
    if(!q){
        res.send("Nothing found please use a valid search");
    }
    res.send(`<h1> search results for :${q}</h1>`);


})


app.get('/r/:subreddit',(req,res)=>{
    const{subreddit}=req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit</h1>`)

})


app.get('/r/:subreddit/:postid',(req,res)=>{
    const{subreddit,postid}=req.params;
    res.send(`<h1> viewing postid: ${postid} on ${subreddit} subreddit</h1>`)

})
//req.params  object allows us to capture dynamic url requests

app.get('/cats',(req,res) =>{
res.send("MEOW!")
});

app.get('/dogs',(req,res) =>{

    res.send("Barking!! Do you want a bit!")

})

app.get('*',(req,res)=>{
    res.send(`I don't know the route you are asking for!`)

})
//this is resposnse when the routing is not known and should be always kept at the bottom

app.listen(3000,()=>{
    console.log("listening on 3000") 

})
//starts a server