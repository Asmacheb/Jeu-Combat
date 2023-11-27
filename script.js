//LES VIES

document.addEventListener('DOMContentLoaded', function () {
  let game = document.querySelector('.vies');
  let ccoeurOriginal = document.querySelector('.coeur');

  // Ajouter l'image ".coeur" 10 fois au début du jeu
  for (var i = 0; i < 10; i++) {
    // Cloner l'élément coeur
    let coeurClone = ccoeurOriginal.cloneNode(true);

    // Ajouter la copie à la div game
    game.appendChild(coeurClone);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let game2 = document.querySelector('.vies2');
  let coeurOriginal2 = document.querySelector('.coeur2');

  // Ajouter l'image ".coeur2" 10 fois au début du jeu
  for (var i = 0; i < 10; i++) {
    // Cloner l'élément coeur2
    let coeurClone2 = coeurOriginal2.cloneNode(true);

    // Ajouter la copie à la div game2
    game2.appendChild(coeurClone2);
  }
});


// LES PSEUDO
let joueur1PseudoEntree = false;
let joueur2PseudoEntree = false;

// Ajoutez une fonction pour vérifier si les deux joueurs ont entré leur pseudo
function lesPseudosEntres() {
  return joueur1PseudoEntree && joueur2PseudoEntree;
}

// Ajoutez une fonction pour afficher le bouton PLAY lorsque les deux pseudos sont entrés
function afficherBoutonPlay() {
  const boutonPlay = document.querySelector('.play');
  boutonPlay.style.display = 'block'
}


//joueur1

let entrer =document.querySelector('.boutonentrer')

entrer.addEventListener('click',(event)=> {
  event.preventDefault();
  const input = document.getElementById('Pseudo');

  const formulaire = document.getElementById('monFormulaire');
  joueur1PseudoEntree = true;

 
  
  const createH1 = document.createElement('h1')
  createH1.textContent = input.value
      // Changer le style du h1
      createH1.style.color = 'white'; // Changer la couleur du texte
      createH1.style.fontSize = '44px'; // Changer la taille du texte
      createH1.style.textTransform = 'uppercase'
      formulaire.style.display = 'none';

  const selectDiv = document.querySelector('.joueur1')
  selectDiv.appendChild(createH1)
  joueur1PseudoEntree = true;

  if (joueur1PseudoEntree && joueur2PseudoEntree) {
    afficherBoutonPlay();
  }
  
  alert('Bonne chance'+" "+ input.value +"!!!!" )
   
})
//joueur2

let entrer2 =document.querySelector('.boutonentrer2')

entrer2.addEventListener('click',(event)=> {
  event.preventDefault();
  
  const input = document.getElementById('Pseudo2');

  const formulaire = document.getElementById('monFormulaire2');
  joueur2PseudoEntree = true;
 
  const createH1 = document.createElement('h1')
  createH1.textContent = input.value
     // Changer le style du h1
     createH1.style.color = 'white'; // Changer la couleur du texte
     createH1.style.fontSize = '44px'; // Changer la taille du texte
     createH1.style.textTransform = 'uppercase'
  formulaire.style.display = 'none';

  const selectDiv = document.querySelector('.joueur2')
  selectDiv.appendChild(createH1)
  joueur2PseudoEntree = true;

  if (joueur1PseudoEntree && joueur2PseudoEntree) {
    afficherBoutonPlay();
  }

  alert('Bonne chance'+" "+ input.value+"!!!!" )
})

// boutonPlay.addEventListener('click', () => {
//   // Vérifie si les pseudos sont entrés avant de commencer la partie
//   if (sontPseudosEntres()) {
//     // Commencez la partie (ajoutez votre logique ici)
//     boutonPlay.style.display = 'none'; // Cachez le bouton PLAY après le clic
//   } else {
//     alert('Veuillez entrer les pseudos pour les deux joueurs.');
//   }
//   tourtour();
// });


// Récupérer le bouton "PLAY" par son tag
const boutonPlay = document.querySelector('.play');

// Ajouter un gestionnaire d'événements pour le clic sur le bouton "PLAY"
boutonPlay.addEventListener('click', function() {
    // Commencer une partie (vous pouvez ajouter votre logique ici)

    // Cacher le bouton "PLAY"
    const divPlay = document.querySelector('.play');
    divPlay.style.display = 'none';
    tourtour();
});


// griser et enlever des vies

const joueur1=document.querySelectorAll('.joueur1')
const joueur2=document.querySelectorAll('.joueur2')

const card1 = document.querySelectorAll('#cardJ1');
const card2 = document.querySelectorAll('#cardJ2');

  card1.forEach((card) => {
    card.addEventListener('click', () => {
      tourtour();
    });
  });
 card2.forEach((card) => {
    card.addEventListener('click', () => {
      tourtour();
    });
  });
  // Variable pour suivre le tour actuel
  let tourJoueur = 0;

  // Fonction pour effectuer l'incrémentation et changer de joueur
  function tourtour() {
    // Incrémente le tour
    tourJoueur++;

    if (tourJoueur % 2 === 1) {
      // Tour du Joueur 1
      console.log('joueur1 joue')
      joueur2.forEach((card) => card.classList.add('grise'));
      joueur1.forEach((card) => card.classList.remove('grise'));
      // Ajoutez ici la logique pour le tour du joueur 1
    } else {
      // Tour du Joueur 2
      console.log('joueur2 joue')
      joueur1.forEach((card) => card.classList.add('grise'));
      joueur2.forEach((card) => card.classList.remove('grise'));
      // Ajoutez ici la logique pour le tour du joueur 2
    }
  }


// ATTAQUES JOUEUR1
 
const guerrier = document.querySelector('.guerrier')
const mage = document.querySelector('.mage')
const pretre = document.querySelector('.pretre')
const archer = document.querySelector('.archer')


let game = document.querySelector('.vies');
let ccoeurOriginal = document.querySelector('.coeur');

let game2 = document.querySelector('.vies2');
let coeurOriginal2 = document.querySelector('.coeur2');

//GUERRIER

guerrier.addEventListener('click', function () {
  // Supprimer trois derniers cœurs
  const vies2 = document.querySelector('.vies2');
  const nbCoeursASupprimer = Math.min(vies2.children.length, 3);

  if (nbCoeursASupprimer > 0) {
    for (let i = 0; i < nbCoeursASupprimer; i++) {
      vies2.removeChild(vies2.lastElementChild);
    }
  }
  gagner ()
});

//MAGE
mage.addEventListener('click', function () {
  // Supprimer trois derniers cœurs
  const vies2 = document.querySelector('.vies2');
  const nbCoeursASupprimer = Math.min(vies2.children.length, 2);

  if (nbCoeursASupprimer > 0) {
    for (let i = 0; i < nbCoeursASupprimer; i++) {
      vies2.removeChild(vies2.lastElementChild);
    }
  }
  gagner ()
});

//PRETRE

pretre.addEventListener('click', function () {
  // Créer un nouvel élément cœur
  const nouveauCoeur = document.createElement('div');
  nouveauCoeur.classList.add('coeur');
  nouveauCoeur.innerHTML = '<img src="img/coeurblanc.png" alt="">';

  // Ajouter le nouvel élément cœur à l'élément .vies
  const vies = document.querySelector('.vies');
  vies.appendChild(nouveauCoeur);
  gagner ()
});

//ARCHER
archer.addEventListener('click', function () {
  // Supprimer trois derniers cœurs
  const vies2 = document.querySelector('.vies2');
  const nbCoeursASupprimer = Math.min(vies2.children.length, 1);

  if (nbCoeursASupprimer > 0) {
    for (let i = 0; i < nbCoeursASupprimer; i++) {
      vies2.removeChild(vies2.lastElementChild);
    }
  }
  gagner ()
});

// ATTAQUES JOUEUR2

const guerrier2 = document.querySelector('.guerrier2')
const mage2 = document.querySelector('.mage2')
const pretre2 = document.querySelector('.pretre2')
const archer2 = document.querySelector('.archer2')

//GUERRIER2
guerrier2.addEventListener('click', function () {
  // Supprimer trois derniers cœurs
  const vies = document.querySelector('.vies');
  const nbCoeursASupprimer = Math.min(vies.children.length, 3);

  if (nbCoeursASupprimer > 0) {
    for (let i = 0; i < nbCoeursASupprimer; i++) {
      vies.removeChild(vies.lastElementChild);
    }
  }
  gagner ()
});

//MAGE2
mage2.addEventListener('click', function () {
  // Supprimer trois derniers cœurs
  const vies= document.querySelector('.vies');
  const nbCoeursASupprimer = Math.min(vies.children.length, 2);

  if (nbCoeursASupprimer > 0) {
    for (let i = 0; i < nbCoeursASupprimer; i++) {
      vies.removeChild(vies.lastElementChild);
    }
  }
  gagner ()
});

//PRETRE2

pretre2.addEventListener('click', function () {
  // Créer un nouvel élément cœur
  const nouveauCoeur2 = document.createElement('div');
  nouveauCoeur2.classList.add('coeur2');
  nouveauCoeur2.innerHTML = '<img src="img/coeurblanc.png" alt="">';

  // Ajouter le nouvel élément cœur à l'élément .vies
  const vies2 = document.querySelector('.vies2');
  vies2.appendChild(nouveauCoeur2);
  gagner ()
});

//ARCHER2
archer2.addEventListener('click', function () {
  // Supprimer trois derniers cœurs
  const vies = document.querySelector('.vies');
  const nbCoeursASupprimer = Math.min(vies.children.length, 1);

  if (nbCoeursASupprimer > 0) {
    for (let i = 0; i < nbCoeursASupprimer; i++) {
      vies.removeChild(vies.lastElementChild);
    }
  }
  gagner ()
});




function gagner (){
  let viej1 = document.querySelectorAll('.vies .coeur')
  let viej2 = document.querySelectorAll('.vies2 .coeur2')
  const j1gagne = document.querySelector('.J1GAGNE')
  const j2gagne = document.querySelector('.J2GAGNE')

  if(viej1.length===0){
    j2gagne.style.display ='block'
    joueur2.forEach((card) => card.classList.remove('grise'));
  }

  if(viej2.length===0){
    j1gagne.style.display ='block'
    joueur1.forEach((card) => card.classList.remove('grise'))
  }
}