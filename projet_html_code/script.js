//Recuperer var rules
rules = document.querySelector('.rules-btn');
aside = document.querySelector('aside');
closeRules = document.querySelector('.close-rules');
console.log(closeRules);

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

steP1 = document.querySelector('.step-1');
choix = document.querySelector('.option-container');

steP1.addEventListener('click', event => {
   event.preventDefault();
   steP1.classList.add('spock ');
   
 
   
   


});
console.log(steP1);