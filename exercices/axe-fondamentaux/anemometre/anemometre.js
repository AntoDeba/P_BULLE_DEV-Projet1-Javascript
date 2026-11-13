// @ts-check

// constante de conversion entre les km/h et les m/s
const tauxConversionMsToKmH = 3.6;

/**
 * Convertit une vitesse de km/h en m/s.
 * @param {Number} speedKmh
 * @returns {Number} vitesse en m/s
 */
export function kmhToMs(speedKmh) {
  return speedKmh / tauxConversionMsToKmH;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 * @param {Number} gustKmh vitesse max rafale
 * @param {Number} averageKmh vent moyen
 * @returns {Number} écarts
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 * @param {Number} speed1
 * @param {Number} speed2
 * @param {Number} speed3
 * @returns {Number} moyenne des trois vitesses
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 * @param {Number} speedKmh vitesse du vent
 * @returns {Boolean} si le vent dépasse la vitesse de 75
 */
export function isStormAlert(speedKmh) {
  return speedKmh >= 75;
}

/**
 * Construit le bulletin météo d'une station.
 * @param {String} station nom de la station
 * @param {Number} speedKmh vitesse du vent
 * @returns {String} bulletin complet
 */
export function windReport(station, speedKmh) {
  return `${station} : vent de ${speedKmh} km/h (${kmhToMs(speedKmh)} m/s).`;
}
