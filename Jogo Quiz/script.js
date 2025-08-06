let currentQuestion = 0;
let score = 0;

showQuestion();

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];
        
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question;
        
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div class="option" data-op="${i}"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;
        
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
        
        
        let progress = ((currentQuestion + 1) / questions.length) * 100;
        document.querySelector('.progress--bar').style.width = progress + '%';
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));
    
    if(questions[currentQuestion].answer === clickedOption) {
        score++;
    }
    
    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.round((score / questions.length) * 100);
    
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    
    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${score}.`;
    
    document.querySelector('.scoreArea button').addEventListener('click', resetQuiz);
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}