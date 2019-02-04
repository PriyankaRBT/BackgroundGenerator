var clr1 = document.querySelector(".clr1");
var clr2 = document.querySelector(".clr2");
var body = document.getElementById("gradient");

var h3css = document.querySelector("h3");
function setGradient(){
    body.style.background =
    "linear-gradient(to right," + clr1.value + ", "
     + clr2.value + ")";

     h3css.textContent = body.style.background + ";";
    // h3css.innerHTML="background: linear-gradient(to right," + clr1.value +", "+ clr2.value + ");";
}

function randomColorGenerate(){
    var letters = "0123456789ABCDEF";
    var color ="#";

    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

function initialrandomBg(){
    clr1.value = randomColorGenerate();
    clr2.value = randomColorGenerate();
    setGradient();
}

clr1.addEventListener("input", setGradient);

clr2.addEventListener("input", setGradient);

