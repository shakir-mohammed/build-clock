//Clock-->
//variables
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

//Functions

function setTime() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotaionRatio) {
    element.style.setProperty('--wareeg', rotaionRatio * 360);
}
//call the fuction every i second
setInterval(setTime, 1000);
setTime();


//Buttons -->
//Variables
const btnOne = document.getElementById('button1')
const btnTwo = document.getElementById('button2')
const btnThree = document.getElementById('button3')
const btnFour = document.getElementById('button4')
const clock = document.querySelector('.clock');
const colors = ['#fad490', '#f19292', '#edf0f2', '#ffe100'];
const buttons = document.querySelectorAll('.button');
//change node list to an array
const buttonsArray = Array.from(buttons)

//EventListeners
buttonsArray[0].addEventListener('click', changeColorToOrange);
buttonsArray[1].addEventListener('click', changeColorToRed);
buttonsArray[2].addEventListener('click', changeColorToGray);
buttonsArray[3].addEventListener('click', changeColorToYellow);

//functions
function changeColorToOrange() {
    clock.style.background = colors[0];
}

function changeColorToRed() {
    clock.style.background = colors[1];
}

function changeColorToGray() {
    clock.style.background = colors[2];
}

function changeColorToYellow() {
    clock.style.background = colors[3];
}