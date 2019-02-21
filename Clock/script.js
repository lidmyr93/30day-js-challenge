let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate(){
    let datum = new Date();
    let sec = datum.getSeconds();
    let secondGrader = ((sec / 60) * 360) + 90;
    let min = datum.getMinutes();
    let minGrader = ((min / 60) * 360) + 90;
    let hours = datum.getHours();
    let hoursGrader = ((hours / 12) * 360) + 90;
    minHand.style.transform = `rotate(${minGrader}deg)`
    secondHand.style.transform = `rotate(${secondGrader}deg)`;
    hourHand.style.transform = `rotate(${hoursGrader}deg)`
}
//Anropar funktionen och ropar efter den varje sekund.
setInterval(setDate, 1000);