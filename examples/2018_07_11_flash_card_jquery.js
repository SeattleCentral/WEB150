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

var questionText = $('#question-text'),
    buttonSection = $('#answer-section'),
    buttonHTML = function(answer) {
        return '<button class="btn btn-primary form-control">' +
                answer + '</button>';
    };
    
var setupQuestion = function(question) {
    questionText.html(question.question);
    buttonSection.html('');
    var answer_list = question.answer_list;
    for (var i = 0; i < answer_list.length; i++) {
        buttonSection.append(buttonHTML(answer_list[i].answer_text));
    }
}

var listenForAnswer = function(question) {
    buttonSection.off('click').on('click', function(event) {
        var selected_answer = $(event.target).html();
        if (checkAnswer(question.answer_list, selected_answer)) {
            alert("You are right!");
            window.Quiz.score += 1;
        } else {
            alert("I am sorry. That is wrong. :(");
        }
        window.Quiz.next_question();
    });
}

var checkAnswer = function(answer_list, selected_answer) {
    for (var i = 0; i < answer_list.length; i++) {
        var current_answer = answer_list[i];
        if (current_answer.answer_text == selected_answer) {
            return current_answer.correct;
        }
    }
    // No answer found in answer_list.
    return false;
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


$.get('https://www.booknomads.com/api/v0/isbn/9789000035526', function(response) {
    alert('The book you requested is title: ' + response.Title);
});