const form = document.querySelector("#shelterform");
const input = document.querySelector("#catname");
const list=document.querySelector("#cats")
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catname=input.Value;
  const newLI=document.createElement("li");
  newLI.innerText=catname;
  list.append(newLI);

})