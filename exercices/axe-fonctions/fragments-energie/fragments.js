// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 */
export function sumFragments(...fragments) {
  let sum = 0;
  for (let fragment of fragments) {
    sum += fragment;
  }
  return sum;
}

/**
 * Compte le nombre de fragments reçus.
 */
export function countFragments(...fragments) {
  let count = 0;
  for (let fragment of fragments) {
    count += 1;
  }
  return count;
}

/**
 * Calcule la moyenne des fragments reçus.
 */
export function averageFragments(...fragments) {
  return sumFragments(...fragments) / fragments.length;
}

/**
 * Ajoute la somme des fragments à une valeur de base.
 */
export function totalWithBase(base, ...fragments) {
  return base + sumFragments(...fragments);
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 */
export function formulaLabel(name, ...values) {
  return `${name} : ${countFragments(...values)} valeurs`;
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 */
export function prepareMixture(name, ...values) {
  let total = sumFragments(...values);
  return `${name} = ${total}`;
}
