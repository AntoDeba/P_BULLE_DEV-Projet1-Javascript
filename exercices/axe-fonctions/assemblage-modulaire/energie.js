// @ts-check

/**
 * Calcule une énergie en ajoutant un bonus.
 */
function calculateEnergy(base, bonus = 0) {
  return base + bonus;
}

/**
 * Multiplie une énergie par un facteur.
 */
function multiplyEnergy(energy, factor = 2) {
  return energy * factor;
}

export { calculateEnergy, multiplyEnergy };
