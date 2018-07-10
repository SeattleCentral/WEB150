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

var listenForAnswer = function(question, quiz_object) {
    var listenForAnswerFunc = function(event) {
        var selected_answer = event.target.innerHTML;
        var answer_list = question.answer_list;
        console.log(selected_answer);
        console.log(event);
        if (checkAnswer(answer_list, selected_answer)) {
            alert("You are right!");
            quiz_object.score += 1
        } else {
            alert("I am sorry. That is wrong. :(");
        }
        quiz_object.next_question();
        buttonSection.removeEventListener('click', listenForAnswerFunc);
    };
    buttonSection.addEventListener('click', listenForAnswerFunc, false);
}

var checkAnswer = function(answer_list, selected_answer) {
    for (var i = 0; i < answer_list.length; i++) {
        var current_answer = answer_list[i];
        if (current_answer.answer_text == selected_answer) {
            return current_answer.correct;
        }
    }  
}

var displayResults = function(correct, out_of) {
    alert('You scored a ' + (correct / out_of * 100) + '%');
};

var Quiz = {
    'question_index': null,
    'score': 0,
    'next_question': function() {
        if (this.question_index == null) {
            this.question_index = 0;
        } else if (this.question_index >= question_data.length - 1) {
            displayResults(this.score, question_data.length);
            return;
        } else {
            this.question_index += 1;
        }
        setupQuestion(question_data[this.question_index]);
        listenForAnswer(question_data[this.question_index], this);
    }
};

Quiz.next_question();























