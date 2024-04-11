const express = require('express')
const app= express()
const path= require('path')

const redditData= require("./data.json")
// console.log(redditData)
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
//you have to set direcotry only once per app after requiring path

app.get('/',(req,res)=>{
    res.render('home.ejs')

    



//res.render method is used to rednder the ejs file

    // res.send('bonjor!')
})

app.get('/rand',(req,res)=>{

   const num= Math.floor((Math.random() * 100)) +1;
    res.render('random.ejs',{num})

})

app.get('/colors',(req,res)=>{

    const colors= ['Violet','Blue','Green','Yellow','Red','Indigo']

    res.render('colors.ejs',{colors});

})

app.get('/friends',(req,res)=>{

    const friends= ['Kislay ','Mohit','Sujal','Ritesh','Avinash','Harshpal'];
    res.render('friends.ejs',{friends});

})

app.get('/r/:subreddit',(req,res)=>{

    const {subreddit}=req.params;
    const data = redditData [subreddit];
    // console.log(data);
    if(data){
        res.render('subreddit.ejs',{...data});

    }
    else{

        res.render('error.ejs',{subreddit});
    }


    

})


//res.render method is used to rednder the ejs file

    // res.send('bonjor!')



app.listen(3000,()=>{
    
    console.log("listening on port 3000!")

})