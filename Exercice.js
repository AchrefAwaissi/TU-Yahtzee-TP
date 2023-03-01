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
// Fonction pour lancer un dé
function lancerDe(nbFaces) {
  return Math.floor(Math.random() * nbFaces) + 1;
}
// Fonction pour compter le nombre d'occurrences de chaque valeur
function compterOccurrences(des) {
  const occurrences = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < des.length; i++) {
    occurrences[des[i] - 1]++;
  }
  return occurrences;
}
// Fonction pour déterminer si un ensemble de dés est un carré
function estCarre(des) {
  const occurrences = compterOccurrences(des);
  return occurrences.some((occurrence) => occurrence >= 4);
}
// Fonction pour déterminer si un ensemble de dés est un brelan
function estBrelan(des) {
  const occurrences = compterOccurrences(des);
  return occurrences.some((occurrence) => occurrence >= 3);
}
// Fonction pour déterminer si un ensemble de dés est un full
function estFull(des) {
  const occurrences = compterOccurrences(des);
  return occurrences.some((occurrence) => occurrence === 2)
    && occurrences.some((occurrence) => occurrence === 3);
}
// Fonction pour déterminer si un ensemble de dés est une petite suite
function estPetiteSuite(des) {
 
}
function calculerScore(des, categorie) {
  switch (categorie) {
    case 'as':
      return des.filter((valeur) => valeur === 1).reduce((sum, valeur) => sum + valeur, 0);
    case 'deux':
      return des.filter((valeur) => valeur === 2).reduce((sum, valeur) => sum + valeur, 0);
    case 'trois':
      return des.filter((valeur) => valeur === 3).reduce((sum, valeur) => sum + valeur, 0);
    case 'quatre':
      return des.filter((valeur) => valeur === 4).reduce((sum, valeur) => sum + valeur, 0);
    case 'cinq':
      return des.filter((valeur) => valeur === 5).reduce((sum, valeur) => sum + valeur, 0);
    case 'six':
      return des.filter((valeur) => valeur === 6).reduce((sum, valeur) => sum + valeur, 0);
    case 'carre':
      if (estCarre(des)) {
        return des.reduce((sum, valeur) => sum + valeur, 0);
      } else {
        return 0;
      }
      case 'brelan':
        if (estBrelan(des)) {
          return des.reduce((sum, valeur) => sum + valeur, 0);
        } else {
          return 0;
        }
        case 'full':
          if (estFull(des)) {
            return 25;
          } else {
            return 0;
          }
          case 'petiteSuite':
            if (estPetiteSuite(des)) {
              return 30;
            } else {
              return 0;
            }
  }
}
module.exports = {lancerDes,calculerScore,compterOccurrences,estBrelan,estPetiteSuite}