let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "green";
newBtn.style.BackgroundColor = "red";
document.querySelector("body").prepend(newBtn);
let para = document.querySelector("p");


let modeBtn = document.querySelector("#mode");
let currMode = "lightmode";

modeBtn.addEventListener("click",() => {
    if (currMode === "lightmode"){
        currMode = "darkMode";
        document.querySelector("body").style.backgroundColor = "black";
    }else {
        currMode= "lightmode";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
    
});