// @ts-check

export const MAX_DRONES_PER_CORRIDOR = 5;

/**
 * Valide une altitude autorisée.
 */
export function validateAltitude(altitude) {
  if (altitude == 50 || altitude == 100 || altitude == 150) return altitude;
  throw new Error(`Altitude interdite : ${altitude} m`);
}

/**
 * Compte les drones présents à une altitude.
 */
export function countAtAltitude(altitudes, altitude) {
  let i = 0;
  for (let droneAltitude of altitudes) {
    if (droneAltitude == altitude) i++;
  }
  return i;
}

/**
 * Vérifie qu'un couloir ne dépasse pas sa capacité.
 */
export function checkCorridor(altitudes, altitude) {
  let total = countAtAltitude(altitudes, altitude);
  if (total <= 5) return total;

  throw new Error(`Collision à ${altitude} m`);
}

/**
 * Vérifie les altitudes et la capacité de tous les couloirs.
 */
export function checkAirspace(altitudes) {
  for (let altitude of altitudes) {
    validateAltitude(altitude);
  }
  for (let altitude of altitudes) {
    checkCorridor(altitudes, altitude);
  }
  return "Espace aérien sûr";
}

/**
 * Produit un rapport sans propager les erreurs de validation.
 */
export function airspaceReport(altitudes) {
  try {
    return checkAirspace(altitudes);
  } catch (error) {
    return `Alerte : ${error.message}`;
  }
}
