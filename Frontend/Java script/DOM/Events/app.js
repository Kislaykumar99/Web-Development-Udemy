const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("clicked me");
  console.log("I hope it worked!!");
};

function scream() {
  console.log("stop");
  console.log("stop....!!");
}
btn.onmouseenter = scream;

const btn3=document.querySelector('#v3');
btn3.addEventListener('click',function(){
    alert("clicked");
})

// let btn1=document.querySelector('#hello');
// let btn2=document.querySelector('#goodbye');

// btn1.addEventListner('click', function(){
//     console.log("hello");
// });
// btn2.addEventListner('click',function(){
//     console.log("goodbye");
// });
let helloButton = document.querySelector("#hello");
let goodbyeButton = document.querySelector("#goodbye");
 
helloButton.addEventListener('click', () => {
    console.log("hello");
});
 
goodbyeButton.addEventListener('click', () => {
    console.log("goodbye");
});