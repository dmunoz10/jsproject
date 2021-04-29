let letterA = document.querySelector(".a");
let letterD = document.querySelector(".d");
let letterF = document.querySelector(".f");
let letterT = document.querySelector(".t");
let letterW = document.querySelector(".w");

let numberTime = document.querySelector(".number");
let enterNumber = document.querySelector(".numberEnter")
let tadaTime = document.querySelector(".tada");
let redo = document.querySelector(".doOver");
let numberButton = document.querySelector(".numberInput")
let textField = document.querySelector(".form-control")
console.log(textField);
let celebName= document.querySelector("#nameCelebrity")


//NEXT STEPS
//add name when gif pops up, arg!
//FINAL STYLE

letterA.addEventListener('click', e=>{
  console.log("image clicked")
numberTime.classList.remove("hidden")
enterNumber.classList.remove("hidden")
letterD.classList.add("hidden")
letterF.classList.add("hidden")
letterT.classList.add("hidden")
letterW.classList.add("hidden")
numberButton.addEventListener('click', e=>{
  let userChoice= textField.value;
  sendApiRequest("Alicia+Keys");
  console.log("Button Clicked!")
  console.log(sendApiRequest)
  async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bZqBb9tDbCTw4NLrI5nei4SoooANpxbH&q=Alicia+Keys&limit=25&offset=0&rating=G&lang=en`);
  let gifs = await response.json();
  console.log(gifs.data[userChoice]);
  getImageFrom(gifs.data[userChoice]);
};
function getImageFrom(gifList){
  let myGif = gifList;
  console.log(myGif)
  console.log(myGif.images)
  console.log(myGif.images.original)
  console.log(myGif.images.original.url)
  addImageToScreen(myGif.images.original.url)
};
let wrapped= document.querySelector("#celebrity");
function addImageToScreen(myURL) {
  wrapped.innerHTML = `<img src="${myURL}"/>`
  tadaTime.classList.remove("hidden")
  celebName.innerHTML = `Alicia Keys!`
};
})
 })

letterD.addEventListener('click', e=>{
  console.log("image clicked")
numberTime.classList.remove("hidden")
enterNumber.classList.remove("hidden")
letterA.classList.add("hidden")
letterF.classList.add("hidden")
letterT.classList.add("hidden")
letterW.classList.add("hidden")
numberButton.addEventListener('click', e=>{
  let userChoice= textField.value;
  sendApiRequest("Donald+Glover");
  console.log("Button Clicked!")
  console.log(sendApiRequest)
  async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bZqBb9tDbCTw4NLrI5nei4SoooANpxbH&q=Donald+Glover&limit=25&offset=0&rating=G&lang=en`);
  let gifs = await response.json();
  console.log(gifs.data[userChoice]);
  getImageFrom(gifs.data[userChoice]);
};
function getImageFrom(gifList){
  let myGif = gifList;
  console.log(myGif)
  console.log(myGif.images)
  console.log(myGif.images.original)
  console.log(myGif.images.original.url)
  addImageToScreen(myGif.images.original.url)
};
let wrapped= document.querySelector("#celebrity");
function addImageToScreen(myURL) {
  wrapped.innerHTML = `<img src="${myURL}"/>`
  tadaTime.classList.remove("hidden")
  celebName.innerHTML = `Donald Glover`
};
})
})

letterF.addEventListener('click', e=>{
  console.log("image clicked")
numberTime.classList.remove("hidden")
enterNumber.classList.remove("hidden")
letterD.classList.add("hidden")
letterA.classList.add("hidden")
letterT.classList.add("hidden")
letterW.classList.add("hidden")
numberButton.addEventListener('click', e=>{
  let userChoice= textField.value;
  sendApiRequest("Frida+Kahlo");
  console.log("Button Clicked!")
  console.log(sendApiRequest)
  async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bZqBb9tDbCTw4NLrI5nei4SoooANpxbH&q=Frida+Kahlo&limit=25&offset=0&rating=G&lang=en`);
  let gifs = await response.json();
  console.log(gifs.data[userChoice]);
  getImageFrom(gifs.data[userChoice]);
};
function getImageFrom(gifList){
  let myGif = gifList;
  console.log(myGif)
  console.log(myGif.images)
  console.log(myGif.images.original)
  console.log(myGif.images.original.url)
  addImageToScreen(myGif.images.original.url)
};
let wrapped= document.querySelector("#celebrity");
function addImageToScreen(myURL) {
  wrapped.innerHTML = `<img src="${myURL}"/>`
  tadaTime.classList.remove("hidden")
  celebName.innerHTML = `Frida Kahlo!`
};
})
})

letterT.addEventListener('click', e=>{
  console.log("image clicked")
numberTime.classList.remove("hidden")
enterNumber.classList.remove("hidden")
letterD.classList.add("hidden")
letterF.classList.add("hidden")
letterA.classList.add("hidden")
letterW.classList.add("hidden")
numberButton.addEventListener('click', e=>{
  let userChoice= textField.value;
  sendApiRequest("Titus+Andromedon");
  console.log("Button Clicked!")
  console.log(sendApiRequest)
  async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bZqBb9tDbCTw4NLrI5nei4SoooANpxbH&q=Titus+Andromedon&limit=25&offset=0&rating=G&lang=en`);
  let gifs = await response.json();
  console.log(gifs.data[userChoice]);
  getImageFrom(gifs.data[userChoice]);
};
function getImageFrom(gifList){
  let myGif = gifList;
  console.log(myGif)
  console.log(myGif.images)
  console.log(myGif.images.original)
  console.log(myGif.images.original.url)
  addImageToScreen(myGif.images.original.url)
};
let wrapped= document.querySelector("#celebrity");
function addImageToScreen(myURL) {
  wrapped.innerHTML = `<img src="${myURL}"/>`
  tadaTime.classList.remove("hidden")
  celebName.innerHTML = `Titus Andromedon!`
};
})
})

letterW.addEventListener('click', e=>{
  console.log("image clicked")
numberTime.classList.remove("hidden")
enterNumber.classList.remove("hidden")
letterD.classList.add("hidden")
letterF.classList.add("hidden")
letterT.classList.add("hidden")
letterA.classList.add("hidden")
numberButton.addEventListener('click', e=>{
  let userChoice= textField.value;
  sendApiRequest("Whitney+Houston");
  console.log("Button Clicked!")
  console.log(sendApiRequest)
  async function sendApiRequest() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bZqBb9tDbCTw4NLrI5nei4SoooANpxbH&q=Whitney+Houston&limit=25&offset=0&rating=G&lang=en`);
  let gifs = await response.json();
  console.log(gifs.data[userChoice]);
  getImageFrom(gifs.data[userChoice]);
};
function getImageFrom(gifList){
  let myGif = gifList;
  console.log(myGif)
  console.log(myGif.images)
  console.log(myGif.images.original)
  console.log(myGif.images.original.url)
  addImageToScreen(myGif.images.original.url)
};
let wrapped= document.querySelector("#celebrity");
function addImageToScreen(myURL) {
  wrapped.innerHTML = `<img src="${myURL}"/>`
  tadaTime.classList.remove("hidden")
  celebName.innerHTML = `Whitney Houston!`
};
})
})
