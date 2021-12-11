let answerName = [""];
let numAnswers = [];
const barColors = [""];

new Chart("studentAnswers", {
    type: "bar",
    data: {
        labels: answerNames,
        datasets: [{
            backgroundColor: barColors,
            data: numAnswers
        }]
    },
    options: {}
})