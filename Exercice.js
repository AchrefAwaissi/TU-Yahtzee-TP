const NB_LANCERS = 3;
const NB_DES = 5;
const NB_FACES = 6;
const SCORES_POSSIBLES = [
  'as',
  'deux',
  'trois',
  'quatre',
  'cinq',
  'six',
  'brelan',
  'carre',
  'full',
  'petiteSuite',
  'grandeSuite',
  'yathzee',
  'chance',
];
// Fonction pour lancer les dés
function lancerDes(nbDes) {
  const des = [];
  for (let i = 0; i < nbDes; i++) {
    des.push(lancerDe(NB_FACES));
  }
  return des;
}
// Fonction pour lancer un dé et nombre de faces 
function lancerDe(nbFaces) {
  return Math.floor(Math.random() * nbFaces) + 1;
}
//export des fonctions
module.exports = {lancerDes}