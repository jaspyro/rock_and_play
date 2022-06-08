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

section = document.querySelector('section');
step_1 = document.querySelector('.step-1');
choix = document.querySelectorAll('.option-container');

paper = document.querySelector('.paper');
scissors = document.querySelector('.scissors');
rock = document.querySelector('.rock');

console.log(paper);
console.log(rock);
console.log(scissors);

step_1.addEventListener('click', event => {
   event.preventDefault();
   step_1.classList.add('.step-1-minimize');
})

// item.addEventListener('click', event => {
//     event.preventDefault();
//     if ( item == 2 )  {
//        console.log("paper");
//     } else if ( choix == rock ) {
//        console.log("rock")
//     } else {
//        console.log("scissors");
//    }
//  });

// choix.forEach(index => {
//       console.log(index);
//       if ( choix.lenght == 0 ) {
//          console.log("papper");
//       } else if ( choix == rock ) {
//          console.log("rock");
//       } else if ( choix == scissors ) {
//          console.log("scissors");
//       } else {
//          console.log("unknow");
//       }
// });

// choix.('click', event => {
//    event.preventDefault();
//    if ( choix == paper )  {
//       console.log("paper");
//    } else if ( choix == rock ) {
//       console.log("rock")
//    } else {
//       console.log("scissors");
//    }
// });