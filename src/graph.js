// IMPORT CHART.JS HERE

let answerName = JSON.parse(sessionStorage.getItem("answerList"));
let numAnswers = [];
for (i=0;i<answerName.length;i++){
    number = getRandomInt(10)
    numAnswers.push(number)
}
const barColors = [];
for (i=0;i<answerName.length;i++){
    color = "red"
    barColors.push(color)
}

new Chart("studentAnswers", {
    type: "bar",
    data: {
        labels: answerNames,
        datasets: [{
            backgroundColor: barColors,
            data: numAnswers
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Poll Results"
        }
    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}