// Prevent more than one poll at a time
if (sessionStorage.getItem("pollCreated") !== "true") sessionStorage.setItem("pollCreated", false);
if (sessionStorage.getItem("answerList") == null) sessionStorage.setItem("answerList", "[]");

function createPoll(){
    // Set question
    question = document.getElementById('question').value;
    sessionStorage.setItem("question", question);
    
    // Set answer
    /*for (i=1; i<5; i++) {
        sessionStorage.setItem(`answer${i}`, document.getElementById(`answer${i}`).value);
    }
    */
    // Allow poll to be displayed and redirect
    sessionStorage.setItem("pollCreated", true);
    window.location.href = "../index.html";

    /*
    question = document.getElementById('question').value;
    var answer1 = document.getElementById('answer1').value;
    var answer2 = document.getElementById('answer2').value;
    var answer3 = document.getElementById('answer3').value;
    var answer4 = document.getElementById('answer4').value;
    sessionStorage.setItem("question", question);
    sessionStorage.setItem("answer1", answer1);
    sessionStorage.setItem("answer2", answer2);
    sessionStorage.setItem("answer3", answer3);
    sessionStorage.setItem("answer4", answer4);
    sessionStorage.setItem("pollCreated", true);
    window.location.href = "../index.html";
     */
}

function addAnswer() {
    currentAnswerList = JSON.parse(sessionStorage.getItem("answerList"));
    newAnswer = document.getElementById("answerCreate").value;
    //const toAddDivider = document.getElementById("currentAnswers");
    //let newParagraph = document.createElement("p");
    //newParagraph.innerHTML = newAnswer;
    //console.log(newParagraph.innerHTML);
    //toAddDivider.appendChild(newParagraph);
    currentAnswerList.push(newAnswer);
    sessionStorage.setItem("answerList", JSON.stringify(currentAnswerList));
}


function preparePoll() {
    // Prevent displaying empty boxes if no poll is created
    if (sessionStorage.getItem("pollCreated") == "false")  return;

    // Display confidence slider (hidden at first)
    document.getElementById("sliderDiv").hidden = false;

    let pollForm = document.getElementById("studentPoll");
    const question = sessionStorage.getItem('question');
    var questionText = document.createElement("p");
    questionText.innerHTML = question;
    pollForm.appendChild(questionText);
    answerList = JSON.parse(sessionStorage.getItem("answerList"))
    for (i=0; i<answerList.length; i++) {
        let answer = answerList[i];
        
        let answerButton = document.createElement("input");
        answerButton.type = "radio";
        answerButton.id = `answer${i}button`
        answerButton.name = "choice";

        let answerLabel = document.createElement("label");
        answerLabel.for = answerButton.id;
        answerLabel.innerHTML = answer;

        pollForm.append(answerButton);
        pollForm.append(answerLabel);
        
        // Add line break
        pollForm.appendChild(document.createElement("br"));
        
    }

    /* var pollCreated = sessionStorage.getItem("pollCreated")
    console.log(pollCreated);
    if (pollCreated == "false"){
        console.log("1")
        return;
    }
    var question = sessionStorage.getItem('question');
    var answer1 = sessionStorage.getItem('answer1');
    var answer2 = sessionStorage.getItem('answer2');
    var answer3 = sessionStorage.getItem('answer3');
    var answer4 = sessionStorage.getItem('answer4');
    var pollForm = document.getElementById("studentPoll");
    var questionText = document.createElement("p");
    questionText.innerHTML = question;

    var answer1button = document.createElement("input");
    answer1button.type = "radio";
    answer1button.id = "answer1button";
    answer1button.name = "choice";
    var answer1label = document.createElement("label");
    answer1label.for = answer1button.id;
    answer1label.innerHTML = answer1;
    var break1 = document.createElement("br")

    var answer2button = document.createElement("input");
    answer2button.type = "radio";
    answer2button.id = "answer2button";
    answer2button.name = "choice";
    var answer2label = document.createElement("label");
    answer2label.for = answer2button.id;
    answer2label.innerHTML = answer2;
    var break2 = document.createElement("br")

    var answer3button = document.createElement("input");
    answer3button.type = "radio";
    answer3button.id = "answer3button";
    answer3button.name = "choice";
    var answer3label = document.createElement("label");
    answer3label.for = answer3button.id;
    answer3label.innerHTML = answer3;
    var break3 = document.createElement("br")

    var answer4button = document.createElement("input");
    answer4button.type = "radio";
    answer4button.id = "answer4button";
    answer4button.name = "choice";
    var answer4label = document.createElement("label");
    answer4label.for = answer4button.id;
    answer4label.innerHTML = answer4;
    var break4 = document.createElement("br")

    var submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.onclick = "submitPoll()";

    pollForm.appendChild(questionText);
    pollForm.appendChild(answer1button);
    pollForm.appendChild(answer1label);
    pollForm.appendChild(break1);
    pollForm.appendChild(answer2button);
    pollForm.appendChild(answer2label);
    pollForm.appendChild(break2);
    pollForm.appendChild(answer3button);
    pollForm.appendChild(answer3label);
    pollForm.appendChild(break3);
    pollForm.appendChild(answer4button);
    pollForm.appendChild(answer4label);
    pollForm.appendChild(break4);
    sessionStorage.setItem("pollCreated", false); */
}

function submitPoll() {

    sessionStorage.setItem("studentAnswer", studentAnswer)
}