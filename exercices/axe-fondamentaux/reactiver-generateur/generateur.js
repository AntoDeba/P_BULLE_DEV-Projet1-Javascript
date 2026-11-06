// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 * @param {number} maxEnergy Energie maximale.
 * @param {number} currentEnergy Energie actuelle
 * @returns {number} Energie manquante
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 * @param {number} maxEnergy Energie maximale
 * @param {number} currentEnergy Energie actuelle
 * @returns {number} Pourcentage d'energie
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100;
}

/**
 * Calcule l'énergie disponible après une recharge.
 * @param {number} currentEnergy Energie actuelle
 * @param {number} recharge
 * @returns {number} energie disponible après recharge
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 * @param {number} currentEnergy Energie actuel
 * @returns {boolean}
 */
export function isGeneratorReady(currentEnergy) {
  if (currentEnergy >= 500) {
    return true;
  } else {
    return false;
  }
}

/**
 * Construit le message d'état du générateur.
 * @param {string} name nom du générateur
 * @param {number} currentEnergy energie actuelle
 * @returns {string} etat du générateur
 */
export function generatorStatus(name, currentEnergy) {
  return `${name} possède ${currentEnergy} unités d'énergie.`;
}
