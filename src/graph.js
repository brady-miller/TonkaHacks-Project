// IMPORT CHART.JS HERE
// var Chart = require('chart.js');

let answerName = JSON.parse(sessionStorage.getItem("answerList"));

const numParticipants = 50;
let splits = [0];
for (i=0;i<answerName.length-1;i++){
    let split = getRandomInt(50);
    splits.push(split);
}
splits.push(numParticipants);
splits.sort(function(a, b) {
    return a - b;
  });

let numAnswers = [];
for (i=0;i<answerName.length;i++){
    let number = splits[i+1]-splits[i];
    numAnswers.push(number);
}

var barColors = [];
for (i=0;i<answerName.length;i++){
    barColors.push(getRandomColor());
}

//pollGraph = document.getElementById("pollGraph").getContext("2d")
var ctx = 'pollGraphAnswers';
var pollGraphAnswers = new Chart(ctx, {
    type: "bar",
    data: {
        labels: answerName,
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
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

let splits2 = [0];
for (i=0;i<9;i++){
    let split2 = getRandomInt(50);
    splits2.push(split2);
}
splits2.push(numParticipants);
splits2.sort(function(a, b) {
    return a - b;
  });

let confidenceAnswers = [];
for (i=0;i<10;i++){
    let number = splits2[i+1]-splits2[i];
    confidenceAnswers.push(number);
}

var barColors2 = [];
for (i=0;i<10;i++){
    barColors2.push(getRandomColor())
}


ctx2 = "pollGraphConfidence"
var pollGraphConfidence = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            backgroundColor: barColors2,
            data: confidenceAnswers
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Confidence Poll Results"
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}