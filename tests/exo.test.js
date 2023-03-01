const {lancerDes,compterOccurrences}  = require ("../Exercice");
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
//Test fonction lancer des des
describe('lancerDes', () => {
  test('renvoie un tableau de la bonne longueur', () => {
    const des = lancerDes(NB_DES);
    expect(des).toHaveLength(NB_DES);
  });
  test('chaque valeur du tableau est un nombre entre 1 et le nombre de faces du dé', () => {
    const des = lancerDes(NB_DES);
    expect(des).toEqual(expect.arrayContaining(Array(NB_DES).fill(expect.any(Number))));
    des.forEach((valeur) => {
      expect(valeur).toBeGreaterThanOrEqual(1);
      expect(valeur).toBeLessThanOrEqual(NB_FACES);
    });
  });
});
//test pour compter le nombre d'occurrences
describe('compterOccurrences', () => {
  test('renvoie un tableau de la bonne longueur', () => {
    const des = [1, 1, 2, 3, 3];
    const occurrences = compterOccurrences(des);
    expect(occurrences).toHaveLength(NB_FACES);
  });
});