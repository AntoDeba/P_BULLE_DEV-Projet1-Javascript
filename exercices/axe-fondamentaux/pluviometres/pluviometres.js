// @ts-check

/**
 * Convertit un relevé en nombre.
 * @param {*} value
 * @returns {Number}
 */
export function readRainfall(value) {
  return Number(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 * @param {*} morning
 * @param {*} evening
 * @returns {Number} total des relevé
 */
export function totalRainfall(morning, evening) {
  return Number(morning) + Number(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 * @param {*} hour
 * @returns {Boolean} l'heure est elle la bonne
 */
export function isScheduledHour(hour) {
  return Number(hour) % 3 === 0;
}

/**
 * Indique si la conversion du relevé produit NaN.
 * @param {*} value
 * @returns {Boolean} vrai si l'input ne peut pas être un nombre
 */
export function isFaultyReading(value) {
  return isNaN(Number(value));
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 * @param {*} manual
 * @param {*} automatic
 * @returns {Boolean} vrai si les deux valeurs sont égal
 */
export function isConfirmedReading(manual, automatic) {
  return Number(manual) === Number(automatic);
}
