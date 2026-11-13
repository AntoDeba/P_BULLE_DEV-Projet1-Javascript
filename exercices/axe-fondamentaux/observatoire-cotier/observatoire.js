// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 * @param {*} value
 * @returns {String} retourne le type de value
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 * @param {*} count
 * @returns {Boolean} vrai si undefined
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 * @param {*} count
 * @returns {Boolean} vrai si null
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 * @param {*} count
 * @returns {Boolean} vrai i different de undefined et null
 */
export function hasBirdCount(count) {
  return count !== undefined && count !== null;
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 * @param {*} northCount
 * @param {*} southCount
 * @returns {Number} resultat de l'addition
 */
export function totalBirds(northCount, southCount) {
  if (northCount === undefined) northCount = 0;
  if (southCount === undefined) southCount = 0;
  return Number(northCount) + Number(southCount);
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 * @param {*} height
 * @returns {Boolean} vrai si c'est un nombre et pas un NaN
 */
export function isValidWaveHeight(height) {
  return Number(height) === height && !isNaN(height);
}
