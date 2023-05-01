//create an array for colors
const colorsArray = ["red", "blue","green", "orange","purple", "cyan","pink","yellow"];
const btn = document.getElementById('btn');
// console.log(btn);
const color = document.querySelector('.color');
btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.background = colorsArray[randomNumber];
    color.innerHTML = colorsArray[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}
