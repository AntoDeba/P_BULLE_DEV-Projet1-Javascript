// @ts-check

/**
 * Convertit une valeur en nombre.
 * @param {any} value n'importe quel valeur
 * @returns {number}
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 * @param {any} value1
 * @param {any} value2
 * @returns {boolean} retourne un boolean en fonction de l'égalité souple
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean} retourne un boolean en fonction de l'égalité stricte
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 * @param {Number} code
 * @returns {boolean}  Vrai si le code est pair
 */
export function isEvenCode(code) {
  return code % 2 === 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 * @param {any} value valeur à tester
 * @returns {boolean}
 */
export function isInvalidCode(value) {
  return isNaN(Number(value));
}
