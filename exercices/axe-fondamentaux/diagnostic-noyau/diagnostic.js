// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 * @param {any} value
 * @returns {string}
 */
export function valueType(value) {
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 * @param {any} value valeur à vérifier
 * @returns {boolean} true si undefined
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Indique si la valeur est null.
 * @param {any} value valeur à vérifier
 * @returns {boolean} true si null
 */
export function isNull(value) {
  return value === null;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 * @param {any} value
 * @returns {boolean} true si connue
 */
export function hasKnownValue(value) {
  return value !== null && value !== undefined;
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 * @param {any} energy
 * @param {any} minimumEnergy
 * @returns {boolean}
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) >= Number(minimumEnergy);
}

/**
 * Compare strictement le nom de la zone attendue.
 * @param {string} zone
 * @param {string} expectedZone
 * @returns {boolean}
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
