//Recuperer var rules
rules = document.querySelector('.rules-btn');
aside = document.querySelector('aside');
closeRules = document.querySelector('.close-rules');

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

//**********************STEP-1******************* */


section = document.querySelector('section');
step_1 = document.querySelector('.step-1');
step_2 = document.querySelector('.step-2');
player_pick = document.querySelector('.player-pick');
computer_pick = document.querySelector('.computer-pick');
replace = document.querySelector('.replace');
choix = document.querySelectorAll('.option-container');


paper = document.querySelector('.paper');
scissors = document.querySelector('.scissors');
rock = document.querySelector('.rock');

console.log(section);
console.log(step_2);

function random() {
   random = Math.floor(Math.random() * 3);
   if (random == 0) {
      computer_pick.appendChild(paper);
   } else if (random == 1) {
      computer_pick.appendChild(scissors);
   }  else {
      computer_pick.appendChild(rock);
   }
}

paper.addEventListener('click', event => {
   event.preventDefault();
   step_1.classList.add('step-1-minimize');
   step_2.classList.add('step-2-minimizer');
   player_pick.appendChild(paper);
   
   random();
})

scissors.addEventListener('click', event => {
   event.preventDefault();
   step_1.classList.add('step-1-minimize');
   step_2.classList.add('step-2-minimizer');
   player_pick.appendChild(scissors);

   random();
})

rock.addEventListener('click', event => {
   event.preventDefault();
   step_1.classList.add('step-1-minimize');
   step_2.classList.add('step-2-minimizer');
   player_pick.appendChild(rock);

   random();
})

