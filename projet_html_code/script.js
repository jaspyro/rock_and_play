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