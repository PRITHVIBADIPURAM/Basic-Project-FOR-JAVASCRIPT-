
var currentquestion = 0;
var score = 0;
var result = 0;
var totquestions = questions.length;

var container = document.getElementById('container');
var questionel = document.getElementById('question');
var option1 = document.getElementById('opt1');
var option2 = document.getElementById('opt2');
var option3 = document.getElementById('opt3');
var option4 = document.getElementById('opt4');
var nextquestion = document.getElementById('nextbutton');
var result = document.getElementById('result');

function loadquestion(questionIndex){
    var q = questions[questionIndex];
    questionel.textContent = (questionIndex + 1) + '.' + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
}
function loadnextquestion (){
   var slelectedoption = document.querySelector('radio:checked');
   if (!slelectedoption){
     alert('Select ur answer first ');
     return;
   }
   var answer = slelectedoption.value;

   if (questions[currentquestion].answer== answer)  {
     score+=10; 
   }
   slelectedoption.checked=false;
   currentquestion++;
   if(currentquestion==totquestions-1){
      nextbutton.textContent = 'Finish';

   }
   if (currentquestion == totquestions) {
     container.style.display ='none';
     result.style.display = '';
     result.textContent = 'Your score :' + score ;
     return;
   }
 loadquestion(currentquestion);
}