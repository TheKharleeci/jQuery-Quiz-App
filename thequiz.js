

$('document').ready(function(){
    $('#start').on('click', function () {
        quiz.start();
        $('#submit').prop('hidden', false)
    })
    
    let questions = [
        {
        question: 'What is the capital of Nigeria ?',
        answers: ['Abuja', 'Lagos', 'Ibadan'],
        correctAnswer: 'Abuja'
    }, 
    {
        question: 'How many states do we have in Nigeria?',
        answers: ['44', '25', '36'],
        correctAnswer: '36'
    }, {
        question: 'What do we use to cook?',
        answers: ['Candle', 'Stove', 'Glasses'],
        correctAnswer: 'Stove'
    }, 
    {
        question: 'Who is the king of the jungle?',
        answers: ['The rat', 'The gorilla', 'The Lion'],
        correctAnswer: 'The Lion'
    },
    {
        question: 'Where do eggs come from?',
        answers: ['Chicken', 'Lizard', 'Onion'],
        correctAnswer: 'Chicken'
    }, 
    ];
    
    var quiz = {
        correct: 0,
        incorrect: 0,
        counter: 30,
        countdown: function () {
            quiz.counter--;
            $('#counter').html(quiz.counter);
            if (quiz.counter <= 0) {
                console.log("Time is up!");
                quiz.done();
    
            }
        },
        
        start: function () {
            timer = setInterval(quiz.countdown, 1000);
            $('#subWrap').prepend('<h2>Time Remaining: <span id="counter">30</span> seconds </h2>');
            $('#start').remove();
            for (var i = 0; i < questions.length; i++) {
                $('#subWrap').append('<h2>' + questions[i].question + '</h2>')
                for (var j = 0; j < questions[i].answers.length; j++) {
                    $('#subWrap').append("<h2><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
                }
            }
        },
        done: function () {
            $.each($('input[name="question-0"]:checked'),
                function () {
                    if ($(this).val() == questions[0].correctAnswer) {
                        quiz.correct++;
                    } else {
                        quiz.incorrect++;
                    }
            });
            $.each($('input[name="question-1"]:checked'),
                function () {
                    if ($(this).val() == questions[1].correctAnswer) {
                        quiz.correct++;
                    } else {
                        quiz.incorrect++;
                    }
                });
            $.each($('input[name="question-2"]:checked'),
                function () {
                    if ($(this).val() == questions[2].correctAnswer) {
                        quiz.correct++;
                    } else {
                        quiz.incorrect++;
                    }
                });
            $.each($('input[name="question-3"]:checked'),
                function () {
                    if ($(this).val() == questions[3].correctAnswer) {
                        quiz.correct++;
                    } else {
                        quiz.incorrect++;
                    }
                });
            $.each($('input[name="question-4"]:checked'),
                function () {
                    if ($(this).val() == questions[4].correctAnswer) {
                        quiz.correct++;
                    } else {
                        quiz.incorrect++;
                    }
                });
            
            this.result();
    
            },
        result: function () {
            clearInterval(timer);
            let quizPercent = [quiz.correct/questions.length]*100;
            $('#subWrap h2').remove();
            if(quizPercent>60){
                $('.greater').fireworks({ 
                    sound: true, // sound effect
                    opacity: 0.9, 
                    width: '100%', 
                    height: '100%' 
                  });
                $('#subWrap').append("<h3>Congratulations!!! Your score is:" + quizPercent + "%" + "</h3>");
                $('#submit').prop('hidden', true);
            }
            else{
                $('.less').prop('hidden', false)
                $('#submit').prop('hidden', true);
                $('#subWrap').append("<h3>Your score is:" + quizPercent + "%" + "</h3>");
            }
            
        },  
    }
    
    $('#submit').click(function(e){
        e.preventDefault
        quiz.done();
        
    })
})