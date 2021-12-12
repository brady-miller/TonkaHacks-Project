// Prevent more than one poll at a time
if (sessionStorage.getItem("pollCreated") !== "true") sessionStorage.setItem("pollCreated", "false");
if (sessionStorage.getItem("answerList") == null) sessionStorage.setItem("answerList", "[]");
// console.log(sessionStorage.getItem("studentAnswer"));



function createPoll(){
    // Set question
    var question = document.getElementById('questionCreate').value;
    sessionStorage.setItem("question", question);
    
    // Set answer
    /*for (i=1; i<5; i++) {
        sessionStorage.setItem(`answer${i}`, document.getElementById(`answer${i}`).value);
    }
    */
    // Allow poll to be displayed and redirect
    sessionStorage.setItem("pollCreated", "true");
    window.location.href = "../index.html";
}

function addAnswer() {
    var currentAnswerList = JSON.parse(sessionStorage.getItem("answerList"));
    // console.log(currentAnswerList)
    var newAnswerInput = document.getElementById("answerCreate");
    var newAnswer = newAnswerInput.value;
    currentAnswerList.push(newAnswer);
    sessionStorage.setItem("answerList", JSON.stringify(currentAnswerList));
    
    let toAddDivider = document.getElementById("currentAnswers");
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = newAnswer;
    //console.log(newParagraph.innerHTML);
    toAddDivider.append(newParagraph);
    newAnswerInput.value = "";
}
/* 
function addQuestion(){
    sessionStorage.setItem("question", document.getElementById("questionCreate").value)
} */


function preparePoll() {
    // Prevent displaying empty boxes if no poll is created
    if (sessionStorage.getItem("pollCreated") == "false")  return;

    // Display confidence slider (hidden at first)
    document.getElementById("sliderDiv").hidden = false;

    let pollForm = document.getElementById("studentPoll");
    let question = sessionStorage.getItem("question");
    var questionText = document.createElement("p");
    questionText.innerHTML = question;
    pollForm.appendChild(questionText);
    var answerList = JSON.parse(sessionStorage.getItem("answerList"))
    
    for (i=0; i<answerList.length; i++) {
        let answer = answerList[i];
        
        let answerButton = document.createElement("input");
        answerButton.type = "radio";
        answerButton.id = `answer${i}button`
        answerButton.name = "choice";
        answerButton.value = answer

        let answerLabel = document.createElement("label");
        answerLabel.for = answerButton.id;
        answerLabel.innerHTML = answer;

        pollForm.append(answerButton);
        pollForm.append(answerLabel);
        
        // Add line break
        pollForm.appendChild(document.createElement("br"));     
    }
    sessionStorage.setItem("pollCreated", "false")
    document.getElementById("submitButton").hidden = false;
}

function submitPoll() {
    //Actually get answer
    var radioButtons = document.getElementsByName("choice");
    var studentAnswer;
    for (i=0; i < radioButtons.length; i++){
        if (radioButtons[i].checked){
            studentAnswer = radioButtons[i].value; 
        }
    }
    //Retrieve confidence answer
    var studentConfidence = document.getElementById("understandingSlider").value
    sessionStorage.setItem("studentConfidence", studentConfidence)

    //ADD REAL VALUE
    sessionStorage.setItem("studentAnswer", studentAnswer);
    location.href = "../index.html";
}

function viewResults() {
    if (sessionStorage.getItem("studentAnswer") == null) {
        return;
    } else {
        location.href = "HTML/graph.html";
    }
}