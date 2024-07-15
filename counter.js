var steps = 1;
var counts = 0;
let today = new Date();


var activity = document.querySelector(".activity");

$(".count-btns").click(function () {
    $.get("https://api.adviceslip.com/advice", function(data){
        let parsedData = JSON.parse(data);
        // Extract the advice from the parsed data
        let advice = parsedData.slip.advice;
        // alert("Data: " + advice );
        activity.textContent = `Advice: ${advice}`
      });

})


var update = document.querySelector(".update-date");
update.textContent=`Today is  ${today.toDateString()}`

var stepNumbers = document.querySelector(".step-number");
stepNumbers.textContent = `Steps : ${steps}`;

var countNumbers = document.querySelector(".count-number");
countNumbers.textContent = `Counts : ${counts}`;

var addSteps = document.querySelector(".step-button-plus");
addSteps.addEventListener("click", () => {
    steps++;
    stepNumbers.textContent =`Steps : ${steps}`;
});

var minusSteps = document.querySelector(".step-button-minus");
minusSteps.addEventListener("click", () => {
    steps--;
    stepNumbers.textContent =`Steps : ${steps}`;
});

var addCount = document.querySelector(".count-button-plus");
addCount.addEventListener('click', () => {
    if(steps>0){
        counts += steps;
        countNumbers.textContent = `Counts : ${counts}`;
        if(counts>0){
            today.setDate(today.getDate() + steps);
            update.textContent = `${counts} days from today is ${today.toDateString()}`;
        }
        else{

            update.textContent = `${counts} days ago was ${today.toDateString()}`;
        }
       
    }
});

var minusCount = document.querySelector(".count-button-minus");
minusCount.addEventListener('click', () => {
    counts -= steps;
    countNumbers.textContent =`Counts : ${counts}`;
    if(counts<0){
        today.setDate(today.getDate() - steps);
        update.textContent = `${counts} days ago was ${today.toDateString()}`;
    }
    else{

        update.textContent = `${counts} days from today is ${today.toDateString()}`;
    }
});

