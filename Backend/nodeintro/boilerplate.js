const fs= require('fs');
const folderName= process.argv[2] || 'Project'
// console.log(fs)
// asynchronous
// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('dog', { recursive: true }, (err) => {
//   if (err) throw err;
// console.log("in callback");
// });

//asynchronous
// fs.mkdirSync('cats');
// console.log("after mkdir")

try{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`,'');
fs.writeFileSync(`${folderName}/app.js`,'');
fs.writeFileSync(`${folderName}/style.css`,'');
}
catch(e){
    console.log("something went wrong!");
    console.log(e);
}