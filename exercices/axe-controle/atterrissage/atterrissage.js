// @ts-check

export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;

/**
 * Calcule la vitesse verticale en tenant compte du vent.
 */
export function verticalSpeed(wind) {
  return DESCENT_SPEED + wind;
}

/**
 * Calcule l'altitude suivante du drone.
 */
export function nextAltitude(altitude, wind) {
  let pos = verticalSpeed(wind) + altitude;
  if (pos < 0) return 0;
  return pos;
}

/**
 * Génère une valeur aléatoire de vent.
 */
export function randomWind() {
  return Math.random() * MAX_WIND;
}

/**
 * Simule un atterrissage et compte sa durée.
 */
export function landingDuration(startAltitude) {
  let time = 0;
  while (startAltitude > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    time++;
  }
  return time;
}

/**
 * Indique si le drone atterrit avant l'épuisement de sa batterie.
 */
export function hasGracefullyLanded(startAltitude, battery) {
  while (startAltitude > 0 && battery > 0) {
    startAltitude = nextAltitude(startAltitude, randomWind());
    battery--;
  }

  return !(startAltitude > 0 && battery <= 0);
}
