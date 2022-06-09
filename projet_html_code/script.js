// show rules
rules = document.querySelector('.rules-btn');
aside = document.querySelector('aside');
closeRules = document.querySelector('.close-rules');

// retrieve element
step_1 = document.querySelector('.step-1');
step_2 = document.querySelector('.step-2');

player_pick = document.querySelector('.player-pick');
computer_pick = document.querySelector('.step-2 .computer-pick');
console.log(computer_pick);

replace = document.querySelector('.replace');
choix = document.querySelector('.option-container');
option = computer_pick.querySelector('.option-container');
console.log(option);
btn_play_again = document.querySelector('.play-again-btn');

// replace winner 
div = document.querySelector('.annouce-winner');
winner = document.querySelector('.annouce-winner-text');
new_p = document.createElement('P');
you_lose = document.createTextNode("YOU LOSE");
no_winner = document.createTextNode("NO WINNER");

// player choice
paper = document.querySelector('.paper');
scissors = document.querySelector('.scissors');
rock = document.querySelector('.rock');

// computer jeux
computer_paper = computer_pick.paper;
computer_scissors = computer_pick.scissors;
computer_rock = computer_pick.rock;


// computer choice
paper_prime = paper.cloneNode(true);
scissors_prime = scissors.cloneNode(true);
rock_prime = rock.cloneNode(true);


// initialisation
main = "";
nbr = "";
element = "";
nbr2 = "";
element2 = "";


rules.addEventListener('click', event => {

   event.preventDefault();
   aside.style.opacity = "1"; 
   aside.style.zIndex = 1; 

});

closeRules.addEventListener('click', event => {

   event.preventDefault();
   aside.style.opacity = "0";

});

//reste fond à assombrir et modifier taille de l'aside

// function random
function randoms() {
   random = Math.floor(Math.random() * 3);
   if (random == 0) {

      console.log("paper ok");
      return option.replaceWith(paper_prime);
   } else if (random == 1) {

      console.log("scisseux ok");
      return option.replaceWith(scissors_prime);
   }  else {

      console.log("rock ok");
      return option.replaceWith(rock_prime);  
   }
}

// function if random number is 
function ifRandom(nbr, element) {
   if (random == nbr ) {

      winner.replaceWith(new_p);
      new_p.classList.add('annouce-winner-text');
      div.nextSibling.new_p;
      new_p.appendChild(element)
   }
}

// function btn play again
function play_again (main) {
   btn_play_again.addEventListener('click', event => {
      event.preventDefault();
      console.log(option);
      step_2.classList.remove('step-2-minimizer');
      step_1.classList.remove('step-1-minimize');
      test2 = querySelector('.step-2 .computer_pick');
      test = test2.querySelector('.option-container.replace');
      test2.removeChild(test);
      
      // step_1.appendChild(main);
   })
}



// main function
function EventListener (main, nbr, element, nbr2, element2) {
   main.addEventListener('click', event => {
      event.preventDefault();
      step_1.classList.add('step-1-minimize');
      step_2.classList.add('step-2-minimizer');
      player_pick.append(main);

      randoms();

      ifRandom(nbr, element);
      ifRandom(nbr2, element2);

      play_again(main);  
   })
}

EventListener(paper,1,you_lose,0,no_winner);
EventListener(scissors,2,you_lose,1,no_winner);
EventListener(rock,0,you_lose,2,no_winner);