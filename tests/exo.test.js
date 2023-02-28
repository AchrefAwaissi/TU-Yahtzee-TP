const {lancerDes}  = require ("../Exercice");
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
describe('lancerDes', () => {
  test('renvoie un tableau de la bonne longueur', () => {
    const des = lancerDes(NB_DES);
    expect(des).toHaveLength(NB_DES);
  });
});
