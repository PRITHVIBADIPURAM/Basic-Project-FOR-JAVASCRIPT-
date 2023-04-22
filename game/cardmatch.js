let cards = document.querySelectorAll('.cards');
let hasFlipedcard = false;
let firstcard, secondcard;
let lockboard =false;

function flipcard() {

  if(lockboard)return;
  if(this === firstcard)return;
  this.classList.add('flip');

  //first click
  if (!hasFlipedcard) {
    hasFlipedcard = true;
    firstcard = this;
  }
  //secondclick
  else {

    secondcard = this;
    //card match
  }
  checkformatch();



}
function checkformatch() {
  if (firstcard.dataset.magic ===
    secondcard.dataset.magic){
    disablecard();
  }
    
    else {
      unflipcard();
      
  }
  
}

function disablecard(){
  {
    firstcard.removeEventListener('click', flipcard);
    secondcard.removeEventListener('click', flipcard);
    reset();
  
    
  } 
}
function unflipcard(){
  //not a match
  lockboard =true;
  setTimeout(() => {
    firstcard.classList.remove('flipcard');
    secondcard.classList.remove('flipcard');
    reset();
  
   }, 1000);
}
function reset(){
  [hasFlipedcard,lockboard] = [false,false];
  [firstcard,secondcard] = [null,null];
}
for (cards of cards) {
  cards.addEventListener('click', flipcard)
 
}
