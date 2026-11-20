// @ts-check

/**
 * Valide une quantité d'énergie.
 * @param {Number} energy
 * @returns {Number}
 */
export function validateEnergy(energy) {
  if (energy < 0) throw new Error("Énergie invalide");
  return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 * @param {Number} energy
 * @returns {String}
 */
export function safeEnergyCheck(energy) {
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch (err) {
    return err.message;
  }
}

/**
 * Valide un code de porte autorisé.
 * @param {*} code
 * @returns {String}
 */
export function validateGateCode(code) {
  if (code != "ALPHA" && code != "BETA" && code != "OMEGA")
    throw new Error("Code inconnu");
  return code;
}

/**
 * Vérifie un code de porte sans propager l'exception.
 * @param {*} code
 * @returns {String}
 */
export function safeGateCheck(code) {
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 * @param {*} text
 * @returns {Number}
 */
export function countValidAttempts(text) {
  let i = 0;
  for (let char of text) {
    if (char == "A" || char == "B") i++;
  }
  return i;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 * @param {String} sequence
 * @returns {Number}
 */
export function attemptsBeforeLock(sequence) {
  let xNumber = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === "X") xNumber++;
    if (xNumber >= 3) return i + 1;
  }
  return sequence.length;
}
