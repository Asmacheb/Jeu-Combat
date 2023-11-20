document.addEventListener('DOMContentLoaded', function () {
    let gameContainer = document.querySelector('.vies');
    let champignonOriginal = document.querySelector('.coeur');
  
    // Ajouter l'image ".champignonJ1" 10 fois au début du jeu
    for (var i = 0; i < 9; i++) {
      // Cloner l'élément champignon
      let champignonClone = champignonOriginal.cloneNode(true);
  
      // Ajouter la copie à la div gameContainer
      gameContainer.appendChild(champignonClone);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    let gameContainer = document.querySelector('.vies2');
    let champignonOriginal = document.querySelector('.coeur2');
  
    // Ajouter l'image ".champignonJ1" 10 fois au début du jeu
    for (var i = 0; i < 9; i++) {
      // Cloner l'élément champignon
      let champignonClone = champignonOriginal.cloneNode(true);
  
      // Ajouter la copie à la div gameContainer
      gameContainer.appendChild(champignonClone);
    }
  });