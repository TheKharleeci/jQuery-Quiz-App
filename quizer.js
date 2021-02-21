$("document").ready(function(){
    let questions = [{
        question: 'What is the capital of Nigeria ?',
        choices: ['Abuja', 'Lagos', 'Ibadan'],
        correctAnswer: 0
      }, {
        question: 'How many states do we have in Nigeria?',
        choices: ['44', '25', '36'],
        correctAnswer: 2
      }, {
        question: 'What do we use to cook?',
        choices: ['Candle', 'Stove', 'Glasses'],
        correctAnswer: 1
      }, {
        question: 'Who is the king of the jungle?',
        choices: ['The rat', 'The gorilla', 'The Lion'],
        correctAnswer: 2
      }, {
        question: 'Where do eggs come from?',
        choices: ['Chicken', 'Lizard', 'Onion'],
        correctAnswer: 0
      }];
    
    let currentIndex = 0;
    let score = 0;
    let choice = [];
    let quiz = $("#quiz-div");
    $("#landing-page-btn").click(function(){
        $("#landing-page").hide();
        $("#quiz-div").prop('hidden', false);
        $("#switchers").prop('hidden', false);
        displayNext();
    })

    $("#nxt").click(function(e){
        e.preventDefault();
        displayNext();
        checkAnswer()
        currentIndex++
    })

    function checkAnswer(){
        choice[currentIndex] = +$('input[name="answers"]:checked').val();
        i= choice.length-1;
        
        if(choice[i] === questions[i].correctAnswer){
            score++;   
        }
        else{
            score+=0;            
        }
    }

    $("#prev").click(function(e){
        e.preventDefault();
        currentIndex--     
        
        displayNext()
        
        
       
    })


    function createQuizElement(index){
        let quizElement = $("<div>", {id: 'question'});
        let heading = $('<h4>Question ' + (index + 1) + ':</h4>');
        quizElement.append(heading);

        let question = $('<p>').append(questions[index].question);
        quizElement.append(question);
        let optionsElement = createRadios(index);
        quizElement.append(optionsElement);

        return quizElement;
    }

    function createRadios(index) {
        let radioList = $('<ul>');
        let item;
        let input = '';
        for (i = 0; i < questions[index].choices.length; i++) {
          item = $('<li>');
          input = '<input type="radio" id= "answers" name="answers" value=' + i + ' />';
          input += questions[index].choices[i];
          item.append(input);
          radioList.append(item);
        }
        return radioList;
      }
    function displayNext(){
        quiz.fadeOut(function(){
            $('#question').remove();
            $('#answers').remove();
            if(currentIndex < 1){
                let nextQuestion = createQuizElement(currentIndex);
                quiz.append(nextQuestion).fadeIn();
                $("#prev").prop('hidden', true)
            }
            else if(currentIndex < questions.length-1){
                let nextQuestion = createQuizElement(currentIndex);
                quiz.append(nextQuestion).fadeIn();
                $("#prev").prop('hidden', false)
            }else{
                let nextQuestion = createQuizElement(currentIndex);
                quiz.append(nextQuestion).fadeIn();
                $("#nxt").prop('hidden', true)
                $("#prev").prop('hidden', false)
                $("#submit").prop('hidden', false)
            }            
        })
    }

    

    $('#submit').click(function(e){
        e.preventDefault()
        checkAnswer()
        $('#quiz-div').prop('hidden', true)
        $('#results').prop('hidden', false)
        $('#switchers').prop('hidden', true)
        let scorePercent = 0
        if(score>questions.length){
            scorePercent += 100
        }
        else{scorePercent += Math.round((score / questions.length) * 100);}
        if(scorePercent>60){
            $('.greater').fireworks({ 
                sound: true, // sound effect
                opacity: 0.9, 
                width: '50%', 
                height: '50%' 
              });
            $('#results').prepend("<h1>Congratulations!!! Your score is:" + scorePercent + "%" + "</h1>");
            
        }
        else{
            $('#results').prepend("<h3>Your score is:" + scorePercent + "%" + "</h3>");
            $('.less').prop('hidden', false)
            
        }
    })
})