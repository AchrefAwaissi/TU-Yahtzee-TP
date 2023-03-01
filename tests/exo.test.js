const {lancerDes}  = require ("../Exercice");
const {calculerScore} = require ("../Exercice")
const {compterOccurrences} = require ("../Exercice")
const {estBrelan} = require ("../Exercice")
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
  
    test('chaque valeur du tableau est un nombre entre 1 et le nombre de faces du dé', () => {
      const des = lancerDes(NB_DES);
      expect(des).toEqual(expect.arrayContaining(Array(NB_DES).fill(expect.any(Number))));
      des.forEach((valeur) => {
        expect(valeur).toBeGreaterThanOrEqual(1);
        expect(valeur).toBeLessThanOrEqual(NB_FACES);
      });
    });
  });
  
  describe('compterOccurrences', () => {
    test('renvoie un tableau de la bonne longueur', () => {
      const des = [1, 1, 2, 3, 3];
      const occurrences = compterOccurrences(des);
      expect(occurrences).toHaveLength(NB_FACES);
    });
  
    test('compte correctement les occurrences', () => {
      const des = [1, 1, 2, 3, 3];
      const occurrences = compterOccurrences(des);
      expect(occurrences[0]).toBe(2);
      expect(occurrences[1]).toBe(1);
      expect(occurrences[2]).toBe(2);
      expect(occurrences[3]).toBe(0);
      expect(occurrences[4]).toBe(0);
      expect(occurrences[5]).toBe(0);
    });
        //cas as somme des ayant un nombre 1
        test('calculerScore - as - retourne la somme des dés ayant la valeur 1', () => {
          const des = [1, 2, 1, 3, 4];
          const categorie = 'as';
          const score = calculerScore(des, categorie);
          expect(score).toBe(2);
        });
        //la somme des dés ayant une valeur de 4 
        test('calculerScore - carre - retourne la somme de tous les dés si c\'est un carré', () => {
          const des = [1, 1, 1, 1, 4];
          const categorie = 'carre';
          const score = calculerScore(des, categorie);
          expect(score).toBe(8);
        });
          //la somme des dés qui n'ont une valeur de 4 
        test('calculerScore - carre - retourne 0 si ce n\'est pas un carré', () => {
          const des = [1, 2, 1, 3, 4];
          const categorie = 'carre';
          const score = calculerScore(des, categorie);
          expect(score).toBe(0);
        });    
          //Cas bonus score estBrelan
  describe('estBrelan', () => {
    test('renvoie true si l\'ensemble de dés est un brelan', () => {
      const des = [1, 1, 1, 4, 5];
      expect(estBrelan(des)).toBe(true);
    });
//Cas bonus score n est pas Brelan
    test('renvoie false si l\'ensemble de dés n\'est pas un brelan', () => {
      const des = [1, 2, 3, 4, 5];
      expect(estBrelan(des)).toBe(false);
    });
  });
  //Cas bonus score est un full
  test('calculerScore - full - retourne 0 si ce n\'est pas un full', () => {
    const des = [1, 1, 2, 3, 2];
    const categorie = 'full';
    const score = calculerScore(des, categorie);
    expect(score).toBe(0);
  });
  //Cas bonus score est un full
  test('calculerScore - full - retourne 25 si c\'est un full', () => {
    const des = [1, 1, 2, 2, 2];
    const categorie = 'full';
    const score = calculerScore(des, categorie);
    expect(score).toBe(25);
  });
});
  

  