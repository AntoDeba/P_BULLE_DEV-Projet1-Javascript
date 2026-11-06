// @ts-check

// constante de conversion entre les km/h et les m/s
const tauxConversionMsToKmH = 3.6;

/**
 * Convertit une vitesse de km/h en m/s.
 */
export function kmhToMs(speedKmh) {
  return speedKmh / tauxConversionMsToKmH;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 */
export function gustGap(gustKmh, averageKmh) {
  // TODO
}

/**
 * Calcule la moyenne de trois mesures.
 */
export function averageOfThree(speed1, speed2, speed3) {
  // TODO
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
export function isStormAlert(speedKmh) {
  // TODO
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  // TODO
}
