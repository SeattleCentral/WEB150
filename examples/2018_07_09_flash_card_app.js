var question_data = [
    {
        "question": "Are you a student?",
        "answer_list": [
            {
                "answer_text": "Yes",
                "correct": true
            },
            {
                "answer_text": "No",
                "correct": false
            },
            {
                "answer_text": "Maybe",
                "correct": false
            }
        ]
    },
    {
        "question": "Are you a Toys R Us kid?",
        "answer_list": [
            {
                "answer_text": "Yes",
                "correct": false
            },
            {
                "answer_text": "No",
                "correct": true
            },
            {
                "answer_text": "Maybe",
                "correct": false
            }
        ]
    },
    {
        "question": "What is the syntax used to define a function named 'my_func'?",
        "answer_list": [
            {
                "answer_text": "def my_func():",
                "correct": false
            },
            {
                "answer_text": "function my_func {}",
                "correct": false
            },
            {
                "answer_text": "var my_func = function() {};",
                "correct": true
            },
            {
                "answer_text": "function my_func = var() {};",
                "correct": false
            }
        ]
    }   
];


var questionText = document.getElementById('question-text'),
    buttonSection = document.getElementById('answer-section'),
    buttonHTML = function(answer) {
        return '<button class="btn btn-primary form-control">' +
                answer + '</button>';
    };
    
var setupQuestion = function(question) {
    questionText.innerHTML = question.question;
    var buttonSectionHTML = '';
    var answer_list = question.answer_list;
    for (var i = 0; i < answer_list.length; i++) {
        buttonSectionHTML += buttonHTML(answer_list[i].answer_text);
    }
    buttonSection.innerHTML = buttonSectionHTML;
}

var listenForAnswer = function(question) {
    buttonSection.addEventListener('click', function(event) {
        var selected_answer = event.toElement.innerHTML;
        var answer_list = question.answer_list;
        console.log(selected_answer);
        if (checkAnswer(answer_list, selected_answer)) {
            alert("You are right!");
        } else {
            alert("I am sorry. That is wrong. :(");
        }  
    }, false);
}

var checkAnswer = function(answer_list, selected_answer) {
    for (var i = 0; i < answer_list.length; i++) {
        var current_answer = answer_list[i];
        if (current_answer.answer_text == selected_answer) {
            return current_answer.correct;
        }
    }  
}

setupQuestion(question_data[0]);
listenForAnswer(question_data[0]);