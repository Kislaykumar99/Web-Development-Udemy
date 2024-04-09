// const fakeRequest= (url) => {
//     return new Promise((resolve,reject)=>{
//         const rand=Math.random();
//         setTimeout(()=>{
//             if(rand<0.7){
//                 resolve("Your Fake Data Is here!");
//             }
//             reject("request error")
//         },1000)

//     })
// }
// fakeRequest('/dogs/1')
// .then((data)=>{
//     console.log("Done with request")
//     console.log("data", data)
// })
// .catch((err)=>{
//     console.log("Oh no!", err)
// })

const delayedColorChange =(color,delay)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor= color;
        resolve(); 

    },delay)
 })
}
// delayedColorChange('red',1000)

// .then(()=>delayedColorChange('orange',1000))
// .then(()=>delayedColorChange('yellow',1000))
// .then(()=>delayedColorChange('green',1000))
// .then(()=>delayedColorChange('blue',1000))
// .then(()=>delayedColorChange('indigo',1000))
// .then(()=>delayedColorChange('violet',1000))
// // .catch(()=>{
// //     console.log("error!")
// // })


async function rainbow(){
    await delayedColorChange('red',1000)
    await delayedColorChange('orange',1000)
    await delayedColorChange('yellow',1000)
    await delayedColorChange('green',1000)
    
    await delayedColorChange('blue',1000)
    await delayedColorChange('indigo',1000)
    await delayedColorChange('violet',1000)
    return "ALL DONE!"
}
// // rainbow().then(()=>{
// //     console.log("End of Rainbow!")
// // })
// async function printRainbow(){
//     await rainbow();
//     console.log("End of Rainbow!")
// }
// printRainbow();


const fakeRequest= (url) => {
    return new Promise((resolve,reject)=>{
        const delay=Math.floor(Math.random()*(4000))+500;
        setTimeout(()=>{
            if(delay>2000){
               reject ("Connection Timeout:");
            }
            else{
           resolve(`Here is your fake data from ${url}`)}
        },delay)

    })
}
async function makeTwoRequests(){
   
     try{
        let data1=await fakeRequest('/page1');
        console.log(data1);
       let data2=await fakeRequest('/page2');
        console.log(data2)
    }

    catch(e){
         console.log("caught an error!")
        console.log("Error is:",e)
    }
       
    
}