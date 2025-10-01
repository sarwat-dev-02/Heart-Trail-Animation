const body = document.querySelector("body");

body.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
const spanEl = document.createElement("span");
spanEl.style.top = yPos + "px";  
spanEl.style.left = xPos + "px";  
const size = Math.random() * 100;
spanEl.style.width = size + "px";
spanEl.style.height = size + "px";
body.appendChild(spanEl);
setTimeout(()=> {
spanEl.remove();
}, 3000)
});