document.addEventListener('DOMContentLoaded', function () {
    let game = document.querySelector('.vies');
    let ccoeurOriginal = document.querySelector('.coeur');
  
    // Ajouter l'image ".champignonJ1" 10 fois au début du jeu
    for (var i = 0; i < 9; i++) {
      // Cloner l'élément champignon
      let coeurClone = ccoeurOriginal.cloneNode(true);
  
      // Ajouter la copie à la div gameContainer
      game.appendChild(coeurClone);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    let game2 = document.querySelector('.vies2');
    let coeurOriginal2 = document.querySelector('.coeur2');
  
    // Ajouter l'image ".champignonJ1" 10 fois au début du jeu
    for (var i = 0; i < 9; i++) {
      // Cloner l'élément champignon
      let coeurClone2 = coeurOriginal2.cloneNode(true);
  
      // Ajouter la copie à la div gameContainer
      game2.appendChild(coeurClone2);
    }
  });


  
let entrer2 =document.querySelector('.boutonentrer2')

entrer2.addEventListener('click',(event)=> {
  event.preventDefault();
  const input = document.getElementById('Pseudo2');

  const formulaire = document.getElementById('monFormulaire2');
  
  const createH1 = document.createElement('h1')
  createH1.textContent = input.value
  formulaire.style.display = 'none';

  const selectDiv = document.querySelector('.joueur2')
  selectDiv.appendChild(createH1)

})




let entrer =document.querySelector('.boutonentrer')

entrer.addEventListener('click',(event)=> {
  event.preventDefault();
  const input = document.getElementById('Pseudo');

  const formulaire = document.getElementById('monFormulaire');
  
  const createH1 = document.createElement('h1')
  createH1.textContent = input.value
  formulaire.style.display = 'none';

  const selectDiv = document.querySelector('.joueur1')
  selectDiv.appendChild(createH1)
  
  alert('BONNE CHANCE'+" "+ 'JOUEUR 1!!!')
   
})



// Récupérer le bouton "PLAY" par son tag
const boutonPlay = document.querySelector('.play');

// Ajouter un gestionnaire d'événements pour le clic sur le bouton "PLAY"
boutonPlay.addEventListener('click', function() {
    // Commencer une partie (vous pouvez ajouter votre logique ici)

    // Cacher le bouton "PLAY"
    const divPlay = document.querySelector('.play');
    divPlay.style.display = 'none';
});


// griser et enlever des vies

const guerrier = document.querySelector('.guerrier')
const mage = document.querySelector('.mage')
const pretre = document.querySelector('.pretre')
const archer = document.querySelector('.archer')

const guerrier2 = document.querySelector('.guerrier2')
const mage2 = document.querySelector('.mage2')
const pretre2 = document.querySelector('.pretre2')
const archer2 = document.querySelector('.archer2')



