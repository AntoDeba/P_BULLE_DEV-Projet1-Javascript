// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 * @param {Number} numberOfRounds
 * @returns {Number} resultat de l'addition
 */
export function sumRounds(numberOfRounds) {
  let total = 0;
  for (let i = 1; i <= numberOfRounds; i++) {
    total += i;
  }

  return total;
}

/**
 * Compte le nombre de caractères d'un code.
 * @param {String} code
 * @returns {Number} nombre de charactère
 */
export function countSymbols(code) {
  let nbrChar = 0;
  for (let char of code) nbrChar++;

  return nbrChar;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 * @param {String} code
 * @returns {Number} nombre de charactère
 */
export function countX(code) {
  let nbrChar = 0;
  for (let char of code) {
    if (char === "X") {
      nbrChar++;
    }
  }

  return nbrChar;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 * @param {Number} energy
 * @param {Number} consumption
 * @returns {Number} nombre de tours complet possible
 */
export function turnsBeforeEmpty(energy, consumption) {
  let turns = 0;
  while (energy - consumption >= 0) {
    energy = energy - consumption;
    turns += 1;
  }
  return turns;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {}
