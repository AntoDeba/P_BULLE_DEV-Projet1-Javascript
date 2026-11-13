// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 * @param {Number} level
 * @returns {String} message d'accès
 */
export function accessMessage(level) {
  if (level >= 5) {
    return "Accès autorisé";
  } else {
    return "Accès refusé";
  }
}

/**
 * Retourne l'état textuel d'une porte.
 * @param {Boolean} isOpen
 * @returns {String} etat de la porte
 */
export function doorStatus(isOpen) {
  return isOpen ? "Ouverte" : "Fermée";
}

/**
 * Retourne le nom de la zone correspondant à un code.
 * @param {*} code
 * @returns {String} zone correspondant au code
 */
export function zoneName(code) {
  switch (code) {
    case "N":
      return "Les Fondations";
    case "E":
      return "Les Archives";
    case "SE":
      return "La Forge";
    case "SO":
      return "La Citadelle";
    case "O":
      return "La Faille";
    default:
      return "Zone inconnue";
  }
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 * @param {Number} energy
 * @returns {String} niveau d'alerte
 */
export function alertLevel(energy) {
  if (energy < 20) {
    return "CRITIQUE";
  } else if (energy <= 49) {
    return "FAIBLE";
  } else if (energy <= 79) {
    return "STABLE";
  } else {
    return "OPTIMAL";
  }
}
