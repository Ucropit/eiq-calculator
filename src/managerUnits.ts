import {
  COEFFICIENT_KILOGRAMS,
  COEFFICIENT_LITERS, COEFFICIENT_TONS, defaultUnits,
  GALLON_IN_PINTS_EQUIVALENCE, gallonsUnits,
  kilogramsUnits,
  litersUnits, TONS_SHORT_IN_LIBRA_EQUIVALENCE, tonsShortUnits, tonsUnits
} from "./constants";

/**
 * @function getUnits
 * @description Function that returns a list of supported units
 * @return array
 */
export const getUnits = (): string[] => defaultUnits

/**
 * @function correctionFactorEiq
 * @description function that applies a correction coefficient to the EIQ according to the unit
 * @param eiq Product eiq
 * @param unit Unit in which the surface and the total applied of Eiq are expressed
 * @return value
 */
export const correctionFactorEiq = (eiq: number, unit: string): number => {

  if(!defaultUnits.includes(unit.toLowerCase())){
    throw new Error(`the unit does not belong to those allowed: [${defaultUnits.join(' ,')}]`);
  }
  if(kilogramsUnits.includes(unit.toLowerCase())){
    return eiq * COEFFICIENT_KILOGRAMS
  }

  if (litersUnits.includes(unit.toLowerCase())) {

    return eiq * COEFFICIENT_LITERS;
  }

  if (tonsUnits.includes(unit.toLowerCase())) {

    return eiq * COEFFICIENT_TONS;
  }

  if(gallonsUnits.includes(unit.toLowerCase())){
    return eiq * GALLON_IN_PINTS_EQUIVALENCE;
  }

  if (tonsShortUnits.includes(unit.toLowerCase())) {

    return eiq * TONS_SHORT_IN_LIBRA_EQUIVALENCE;
  }

  return eiq;
};
